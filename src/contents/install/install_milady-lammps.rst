.. _`sec:insta_lammps`:

MILADY potentials in Lammps
---------------------------

In order to use ``MILADY`` potentials with ``Lammps`` you should compile 
``Lammps``with ``Milady`` library. 
The next :ref:`section Using <sec:using_lammps>` briefly summarizes how to 
employ in ``Lammps`` our potentials while the  :ref:`section Installing <sec:install_lammps>` details the 
full ``Lammps + MILADY`` installation. 


.. _`sec:using_lammps`:

Using MILADY potentials 
^^^^^^^^^^^^^^^^^^^^^^^


Running ``Lammps`` with ``MiLaDy`` potentials is easy: 
set in ``Lammps`` input file the ``pair_style`` as ``milady`` and indicate 
the name of your potential file:

.. code-block:: bash

  pair_style milady
  pair_coeff * * Fe_LML.pot Fe

For many elements you should just provide the elements for which your elements 
where designed. E.g. for one potential designed for a TaTiVW HEA the ``pair_coeff``
line is as follow: 

.. code-block:: bash

  pair_coeff * * hea.pot Ta Ti V W

The ready-to-use input files can be found in Examples of this repository


.. _`sec:install_lammps`:

Installing Lammps and MILADY  
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Here we provide the steps for building ``Lammps`` with ``MILADY`` patch will call 
this as ``milady_lammps``. 

.. note::

  ``milady_lammps`` installation is similar to ``Lammps`` regular 
  installation for which the  library ``ml-milady`` is on. So far,  
  for the users, which have experience with ``Lammps`` installation they 
  can go directly to ``milady_lammps`` part.      

The current version of ``milady_lammps`` requires:

- Fortran compiler: ``gfortran`` OR ``ifort``
- C++ compiler: ``g++`` 
- MKL library from Intel (for this installation) or any other 
  Lapack/ScaLapack distribution.   

We have tested installations with following versions:

.. code:: bash

  g++        (version >= 9.0.0)
  gfortran   (version >= 9.0.0)
  ifort      (version >= 2018.0.0)
  MKL        (version >= 2018.0.0) with gfortran support



We describe here the way that we use and we know that it works.
If you know a better precedure, we are happy to learn about your experience.
You can :email:`send us an email<ai.unseen.group@gmail.com>` to update the present documentation.



1. Clone our repository of ``milady_lammps``:

.. code:: bash

  git clone --recursive git@github.com:tomswinburne/milady_lammps.git milady_lammps.git

2. turn on  ``MILADY`` library in ``Lammps``:

.. code:: bash

  cd milady_lammps.git/src 
  make yes-ml-milady 

3. Choose the compilator for ``milady_lammps``: ``intel`` or ``gfortran``. 
Note that there is no restriction in the choice that you have for the 
compilation of ``Lammps`` (we use default parameters and ``g++`` compiler). 
Below, we provide the 2-step example using Intel Fortran ``ifort``. 
The case of ``gfortran`` is similar.
 
3a. Edit the appropiate  ``Makefile.lammps.ifort`` for your architecture. 
``milady_lammps`` library uses ``MKL`` and some other Intel libraries from 
``Intel Fortran`` compiler. You need to localize the root directory 
for ``MKL`` and ``intel64`` libraries. 
We use ``oneAPI Intel`` free distribution. Here are our choices:

.. code:: bash

  MKLROOT=/opt/intel/oneapi/mkl/latest/
  LIBCOMP=/opt/intel/oneapi/compiler/latest/linux/compiler/lib/intel64/
  
The paths will be similar for any older distribution of ``MKL`` and 
``Intel Fortran``,  such as ``Intel Composer``, ``Intel Parallel Studio``,  etc.
If you have doubts: write us :email:`send us an email<ai.unseen.group@gmail.com>` . We are happy to help you !!!!

.. note::

  If this is too painfull for you we provide some examples of ``Makefile.lammps.ifort`` on various HPC computers. Here you can found an 
  ``Makefile.lammps.ifort`` for `Marconi <https://raw.githubusercontent.com/ai-atoms/milady-docs/main/src/contents/install/Files/Makefile.lammps.ifort>`_ , `TGCC Irene <https://raw.githubusercontent.com/ai-atoms/milady-docs/main/src/contents/install/Files/Makefile.lammps.ifort_ForIrene>`_ 
  and `some personal computer <https://raw.githubusercontent.com/ai-atoms/milady-docs/main/src/contents/install/Files/Makefile.lammps.ifort_ForLinux>`_  . 
  After download please copy that file in `lib/milady/Makefile.lammps.ifort`

3b. Compile ``milady`` library in ``milady_lammps``: 

.. code:: bash 

    cd milady_lammps.git/lib/milady
    make -f Makefile.mpi_ifort  clean 
    make -f Makefile.mpi_ifort   

4. ``milady_lammps`` final compilation .... ouufff: 

.. code:: bash 

    cd milady_lammps.git/src
    make mpi 

.. warning::
  Sometime the default ``Lammps/src/MAKE/Makefile.mpi`` is somehow different from platform to platform. If this last has some problems, it means that you 
  have some inconsistencies in the ``Lammps`` compilation. Try with one of the following ``Makefile.mpi`` file: 
  `Marconi <https://raw.githubusercontent.com/ai-atoms/milady-docs/main/src/contents/install/Files/Makefile.mpi_Lammps_Marconi>`_ , Irene or `some personal computer <https://raw.githubusercontent.com/ai-atoms/milady-docs/main/src/contents/install/Files/Makefile.mpi_ForLinux>`_  .   
       

That's it! We know ... compilations are painful!

.. note::
  IMPORTANT:  Many thanks to users that have reported some typos, errors in 
  Makefile. In particular many thanks to  Marie Landeiro Dos Reis and Antoine Kraych !


