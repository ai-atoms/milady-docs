Databases
#########

Database manipulation
=====================

.. option::  db_file (character(len=80))

   The file that design the database
   chosen for the potential fitting. each line has the syntax: ``class KLM number_of_files number_of_selected_files``

   Default ``"db_model_in"``

.. option::  db_path (character(len=60))

   Path to the database where the
   poscar are located. With the default value you should have `` poscar`` files in 
   ``DB`` directory  

   Default ``"./DB/"``.

.. option::  selection_type (integer)

   Inside each ``class`` and ``KLM`` subdatabase mentioned in ``db_file``

   #. ``1`` selects first "ns" elements of the database;

   #. ``2`` selects last "ns" elements of the database;

   #. | ``3`` selects randomly "ns" subsets of "kelem" elements of the
        database

   #. | ``4`` selects first "ns" subsets of "kelem" elements of the
        database from a starting configuration defined in the
        ``db_file``

   | In the case of new type of input, using ``db_file`` "ns" is given
     by ``number_of_selected_files`` inside ``class``.\ ``KLM``
   | Default ``3``.

.. option::  seed (integer)

   Seed for random number generator.

   Default ``11``.

Database files
==============

.. _db-format:

Database file format
--------------------

Database files for MiLaDy are stored in the ``.poscar`` format.

Besides a standard information (cell vectors, number of atoms, atomic
coordinates and forces) that is usually included in ``.poscar``, our
databases files also contain explicit information about chemical
compound and energy of the system in the first line as well as the
stress tensor (independent six components in the :math:`\sigma_{xx}`,
:math:`\sigma_{yy}`, :math:`\sigma_{zz}`, :math:`\sigma_{yz}`,
:math:`\sigma_{xz}`, :math:`\sigma_{xy}` order, as provided by VASP),
and ISPIN tag in the end of the file.

The energies, forces and stress
are provided in eV, eV/Å and eV/Å\ :math:`^{3}`, respectively.

An
example of a typical database ``.poscar`` file is reported below.

.. code-block:: python
   :linenos:

   111 1 Fe 26 -15.7255500 0.7884238 0 # EFS-tag n element mass E_1 E_2 E_3
   1.00000000 # unit = 1Å
   2.63475324 0.00000000 0.00000000 # cell vectors
   0.00000000 2.63475324 0.00000000
   0.00000000 0.00000000 2.63475324
   2 # number of atoms
   Cartesian
   0.00000000 0.00000000 0.00000000 # atomic positions
   1.31737662 1.31737662 1.31737662
   # empty line
   0.00000000 0.00000000 0.00000000 # forces
   0.00000000 0.00000000 0.00000000
   # empty line
   -0.42315918 -0.42315918 -0.42315918 0 0 0 # stress
   # empty line
   2 # ISPIN tag: 2 - magnetic, 1 - non magnetic; 0 - not known


The first line of this file (treated as a comment by VASP) indicates
that the file contains information about energy (``E=1`` in ``EFS``),
forces (``F=1`` in ``EFS``), stress (``S=1`` in ``EFS``); that the
system is built by ``1`` chemical element which is ``Fe`` with atomic
mass ``26``, total energy of the system is ``-15.7255500``, target
energy value for training (:math:`E^{tot}-E^{ref}_{1}`) is ``0.7884238``
and the alternative target value (:math:`E^{tot}-E^{ref}_{2}`) is ``0``.
In this example, the reference energy :math:`E^{ref}_{1}` is a total
energy of a perfect crystal.

For the systems which contain more than one chemical element (alloys,
oxides *etc.*), the structure of the first and sixths lines will
slightly change. For instance, the first line for Fe\ :math:`_{3}`\ C
cementite with known energies and forces (but no stress tensor) is:


.. code-block:: python

   110 2 Fe 26 C 12 -15.7255500 0.7884238 0

and the sixth line for the 4-atom Fe\ :math:`_{3}`\ C system is

.. code-block:: python

   3 1

The database files of this format can be directly used as input
configurations for calculations in VASP and structure visualization in
OVITO. Simple renaming of the the .poscar files to POSCAR allows also
their visualization in VESTA.

**The case of the calculations for the descritors and no derivatives
i.e.** ``desc_forces=.false.`` In this particular case only the
positions of atoms and the box informations are read. Any information
about forces , spin etc is ignored and is not complusory.

**Other file formats.** Some of the files can be stored in binary format
``.traj``, generated and read by `Atomic Simulation
Environment <https://wiki.fysik.dtu.dk/ase/>`__ (ASE). The data can be
then extracted to the database ``.poscar`` format with a python script
``extract\_traj.py`` that is provided together with ``.traj`` files.
Conversion of the ``.poscar`` DB files (compatible with MiLaDy) into
extended ``.xyz`` format can be performed using ``DB\_poscar2xyz.py``.
The inverse conversion from ``.xyz`` to ``.poscar`` can be done with
``DB\_xyz2poscar.py``.

.. _`sec:dbnames`:

Database file names
-------------------

The database files for MiLaDy are generally named as
``CCKLMXXXXXX.poscar``. In this notation, the *class* ``CC`` is defined
by a number that can vary from 01 to 99. This part of the file name
indicates a physical property that can be derived from this files
(*e.g.*, elasticity, point defects, *etc.*). The class is directly
linked to the characteristics of the system that should be fit
(E=energy, F=forces, S=stress). Thus, for example for the classes ``01``
and ``02`` corresponding to equations of state (EOS) and elasticity, the
energies and stress ES represent important parameters to fit (forces are
equal zero in this case), while for the class ``04`` with Generalized
Stacking Faults (GSF), only energies are of our interest.

The ``KLM`` notation in the file names describes a *type* of the system,
which includes composition, structure, and a source of the database. The
first index ``K`` indicates a material (composition + structure). For
instance, bcc Fe corresponds to ``K``\ =1, hcp Fe to ``K``\ =2 and bcc W
to ``K``\ =3, *etc.*

.. _`sec:db-model`:

Input file db\ :math:`\_`\ model.in
-----------------------------------

An input file ``db_model.in`` provides a detailed summary of the
database which will be used to fit a ML potential in MiLaDy. Each line
in the file stands for the categories of the database with different
class ``CC`` and ``KLM``. After providing the relevant ``CC`` and
``KLM`` attributes, one should indicate the total number of files in the
database belonging to this category and how many of them should be used
for training of the potential. The rest of the files will be used for
the test.

For each category listed in the ``db_model.in``, one can independently
define its ``EFS`` tag in the form of ``T`` or ``F`` standing for
energies, forces and stress respectively. The final EFS fitting scheme
for a given system will be a superposition of the EFS provided in the
``db_model.in`` and of the ``EFS``-tag, in the first line of a
``.poscar`` file (see Section `4.1 <#db-format>`__). For instance, if
the ``EFS-tag`` in the ``.poscar`` file is ``110`` and ``TFF`` in the
``db_model.in``, the fit will be performed only for the energies.

The last six numbers in each line define the three ranges:
:math:`[w^{min}_E; w^{max}_E], [w^{min}_F; w^{max}_F], [w^{min}_S; w^{max}_S]`
within which the regression weights will be varied for energies, forces
and stress, respectively. The search of optimum regression errors is
performed using evolutionary algorithm. In the example of the
``db_model.in`` below, the weights are set to vary between ``1e2`` and
``1e6`` for energy, ``1e1`` and ``1e3`` for forces and ``1e2`` and
``1e4`` for stress. Setting everywhere ``1.e0`` will result in a simple
fit without regression weights.

.. code-block::

   01 120 614 425 T F T 1.e2 1.e6 1.e1 1.e3 1.e2 1.e4
   02 110 22  15  T F T 1.e2 1.e6 1.e1 1.e3 1.e2 1.e4
   02 120 22  15  T F T 1.e2 1.e6 1.e1 1.e3 1.e2 1.e4
   02 130 22  15  T F T 1.e2 1.e6 1.e1 1.e3 1.e2 1.e4


.. warning::

   For the particular case of the ``selection_type=4`` the above
   file should provide the first configuration used for the trainning
   selection. As in the following example, where the first configuration
   becomes ``10`` for the class ``01`` and ``1`` for all the others, exept
   the last class for which it is ``2``.

   .. code-block::

      01 120 614 425 10 T F T 1.e2 1.e6 1.e1 1.e3 1.e2 1.e4
      02 110 22  15  1  T F T 1.e2 1.e6 1.e1 1.e3 1.e2 1.e4
      02 120 22  15  1  T F T 1.e2 1.e6 1.e1 1.e3 1.e2 1.e4
      02 130 22  15  2  T F T 1.e2 1.e6 1.e1 1.e3 1.e2 1.e4


Database in descriptor space: writing outputs.
==============================================

.. option::  write_desc (logical)

   Writing or not the local atomic descriptors. The data will be writen in the  
   directory ``descDB``. This option write the descriptors for local energy as well for 
   atomic forces. 
   In order to write only the descritors of the local atomic environement set 
   ``desc_forces=.false.``

   Default ``write_desc=.false.``
.. note::

      However, not all the database is writen. It is writen only the configuration that 
      are asked in ``db_model.in``   

.. option::  type_of_eml_file (integer)

   The type of descriptor file, which is written if ``write_desc=.true.``. Depending on the 
   value of ``type_of_eml_file``, which can be ``1``, ``2`` or ``3`` the descriptor files written in 
   ``descDB`` has the extension ``eml``, ``csv`` and ``npz`` respectively.

   - ``1`` The name of files is of the form ``descDB/CC_KLM_XXXXXX.eml`` and the format 
     is ``nat x dim_desc + 1`` matrix. Where  ``nat`` is the number of atoms in the 
     corresponding atomic system and ``dim_desc`` the dimension of the descriptor. 
     The first column of the matrix indicates the atomic id  in the system 
     (the same id as in the corresponding ``poscar``) and the other ``dim_desc`` columns are the various 
     components of the descriptor.

   - ``2`` the files will be written in ``csv`` format in  ``descDB/CC_KLM_XXXXXX.csv``. 
     The shape of the data is same as for option ``1``. 

   - | ``3`` ensures that the binary format ``npz`` is ``descDB/CC_KLM_XXXXXX.npz``. 
     The shape of the data is the same as for option ``1``. 
   
   Default ``type_of_eml_file=1``
   
.. note::

      ``npz`` files are smaller in size with a factor of 10 compared to ``eml`` or ``csv``. However, pay attention that sometimes 
      there can be problems when you generate the files on one computer then you read on other 
      computer.  



