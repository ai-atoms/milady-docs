
.. _`sec:advanced`:

Advanced options
================

Here we describe some functionality of ``Milady`` for advanced users. In most of the cases the use of these options gives some errors
because of lack of full documentation. 

.. warning:: 
   We do not recommend at all the use of these options unless you are a very advanced developper.  

.. option::  iread_ml (integer)

   0 compute on the fly, 1 read from previous run.

   Default is ``0``.

.. option:: isave_ml (integer)

   0 do nothing, 1 write on the HDD and run, 2 MPI and threading.

   Default is ``0``.

.. option::  kcross (logical)

   Default is ``.false.``.

.. option::  marginal_likelihood (logical)

   Default is ``.false.``.

.. option::  sparsification (logical)

   Default is ``.false.``.

.. option::  n_kcross (integer)

   Default is ``0``.

.. option::  target_type (integer)

   1 - energy, 2 - force.

   Default is ``1``.

.. option::  force_comp (integer)

   1 - x component of forces, 2 - y
   component of forces, 3 - z component of forces.

   Default is ``1``.

.. option::  toy_model (logical)

   Type of the database:

   #. ``toy_model=.true.`` Database is generated using an analytical
      function on which is applied some noise (:math:`L` being a
      parameter and D the dimensionality of one point of the data):

      .. math::

         f(\mathbf{x}, L) =
                         \begin{cases}
                          \sin \left( \frac{2 \pi x_1 }{L} \right) & \text{if } \mathbf{x} \in  \mathbb{R}^1 \\
                          \sin \left( \frac{2 \pi x_1 }{L} \right)  +
                           \cos \left( \frac{2 \pi x_2 }{L} \right)  & \text{if }  \mathbf{x} \in  \mathbb{R}^2 \\
                            \sin \left( \frac{2 \pi x_1 }{L} \right)  +
                            \cos \left( \frac{2 \pi x_2 }{L} \right) +
                            \sum_{i=3}^D \exp{ \frac{1}{2 L} \left(x_i-\frac{L}{i-2} \right)^2 } & \text{if }  \mathbf{x} \in  \mathbb{R}^D, \text{with D $\ge$ 3}  \\
                         \end{cases}
                       \nonumber

   #. ``toy_model=.false.`` Database was already computed. In order to
      manage the database input please read the section
      `4 <#sec:odatafiles>`__.

   Default is ``.false.``

.. option:: build_subdata (logical)

   Build a sub database from the whole database.

   Default ``.false.``.

.. option::  pref (character(len=2))

   The prefix of subdatabase name.

   Default ``"00"``.

.. option::  nd_data (integer)

   Number of ``mlposcar`` files included in
   the repository from which the database is extracted.

   Default ``0``.

.. option:: ns_data (integer)

   How many mlposcar files are used in order to build the database.

   Default ``100``.

.. option::  i_begin (integer)

   Start to read poscar from ``i_begin+1``.

   Default ``i_begin=0``.

.. option::  kelem (integer)

   Random selection of ``ns_data``.
   Subset of ``kelem`` elements of database

   Default 100.

.. option::  path (character(len=60)),

   Path to the database where the poscar are located.

   Default ``"/home/marinica/test_ml/data/"``.

.. option::  dim_data (integer)

   Number of elements of the database. This
   variable is extrenal (imposed by the user) only in the case
   ``toy_model=.true.``. Otherwise, this variable is an internal
   variable that depends on the design of the database (i.e. the file
   ``db_file.in``

   Default ``100``.

.. option::  n_frac (real)

   Fraction of database used for testing ( ``dim_data_test = dim_data * n`` )
   and ``1.0-n_frac`` fraction is used for trainning
   (``dim_data_train``). ::math`0.0 \le n_frac \le 1.0`.
   Set 0 for no prediction. Other possibility to
   split the database in train and test is given by the desing of the
   database.

   Default ``0.d0``.


