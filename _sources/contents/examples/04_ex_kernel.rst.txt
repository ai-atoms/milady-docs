
.. _`ex:kernel-poly`:

Kernel regression using polynomial kernel
-----------------------------------------

Here we provide an example of input file to perform kernel noise ML
(KNML) fit for W. The relevant files are provided in
``Examples/KERNEL_POLY_W_BSO4``.

For the models like kernel are performed using ``ml_type=1``. However,
any kernel fit requires one pre-processing step, which actually are two
:). Here are listed all three:

#. perfrom a LML fit with the same descriptor that you intend to perform
   kernel fit: ``ml_type=0``

#. get the representative environements from your
   databases:``ml_type=-2``. Those atomic environements will define your
   kernel.

#. perform the kernel fit: ``ml_type=1``.

.. note::

   All these steps should be run in the same directory. Lets take, one by one.

Problem: we want a kernel fit based on BSO4 descriptor, for W.

The input of each step are stored in ``vacancy.ml_01``,
``vacancy.ml_02`` and ``vacancy.ml_03`` files. At each step please copy
all of them in ``vacancy.ml``

**1. LML fit** Typical ``ml`` file ``vacancy.ml_01`` file:

.. code-block:: fortran

   &input_ml               
   debug=.false.           
                  

   !ML model               
   ml_type=0               !set 0 to perform the fit using basis functions
   mld_order=1            !set 1 for linear regression
   mld_fit_type=4         !lapack full SVD with rank estimation
   desc_forces=.true.      !set true to fit the forces

   !Define your system
   fix_no_of_elements=1    !the number of chemical species in the system
   chemical_elements=" W " !the system composition, ordered as in DB files

   !Descriptor settings
   r_cut=4.7d0             !set the cutoff distace Rc
   descriptor_type=9       !set 9 for bispectrum SO4
   j_max=4.0               !angular moment for bispectrum SO4

   &end


**2. Selection of kernel points** The selection in this example is done
using MCD/Mahalanobis distance. You should define the classes that
define the MCD class and the exponent Please note: ``ml_type=-2`` and
``write_kernel_matrix=.true.`` The content of the file ``vacancy.ml_02``

.. code-block:: fortran
   :emphasize-lines: 5,19-28

   &input_ml
   debug=.false.

   !ML model               
   ml_type=-2                 !set -2 to perform kernel selection
   mld_order=1               !set 1 for linear regression
   mld_fit_type=4            !lapack full SVD with rank estimation
   desc_forces=.true.         !set true to fit the forces

   !Define your system
   fix_no_of_elements=1       !the number of chemical species in the system
   chemical_elements=" W "    !the system composition, ordered as in DB files

   !Descriptor settings
   r_cut=4.7d0                !set the cutoff distace Rc
   descriptor_type=9          !set 9 for bispectrum SO4
   j_max=4.0                  !angular moment for bispectrum SO4

   !Kernel dump settings   
   write_kernel_matrix=.true. !write or not the selected kernel.
   n_pca=3                    !set 3 (default)
   classes_for_mcd="07 08 13" !classes used for the MCD reference.
   
   !Choose the classes more close to the bulk, MD bulk, deformed bulk etc
   power_mcd=0.05d0           !exponent used for the grid of selction of kernel.
   np_kernel_ref=1000         !number of proposed points in the MCD class
   np_kernel_full=4000        !number of points outside the MCD class
   kernel_dump=2              !set 2 for MCD/MAHALANOBIS
   &end

**3. kernel fit.**

Just change in previous ml file: ``ml_type=1`` and
``write_kernel_matrix=.false.`` and set the characteristic of kernel.
Let’s look to the ``vacancy.ml_03`` file.



.. code-block:: fortran
   :emphasize-lines: 5,20,30-34

   &input_ml
   debug=.false.

   !ML model               
   ml_type=1                  !set 1 to perform kernel fit
   mld_order=1               !set 1 for linear regression
   mld_fit_type=4            !lapack full SVD with rank estimation
   desc_forces=.true.         !set true to fit the forces

   !Define your system
   fix_no_of_elements=1       !the number of chemical species in the system
   chemical_elements=" W "    !the system composition, ordered as in DB files

   !Descriptor settings
   r_cut=4.7d0                !set the cutoff distace Rc
   descriptor_type=9          !set 9 for bispectrum SO4
   j_max=4.0                  !angular moment for bispectrum SO4

   !Kernel dump settings   
   write_kernel_matrix=.false. !write or not the selected kernel.!set 3 (default)
   n_pca=3                    !set 3 (default)
   classes_for_mcd="07 08 13" !classes used for the MCD reference.
   
   !Choose the classes more close to the bulk, MD bulk, deformed bulk etc
   power_mcd=0.05d0           !exponent used for the grid of selction of kernel.
   np_kernel_ref=1000         !number of proposed points in the MCD class
   np_kernel_full=4000        !number of points outside the MCD class
   kernel_dump=3              !set 3 dump by MCD/MAHALANOBIS
   
   !Kernel settings
   kernel_type=4              !set 4 for polynomial kernel.
   kernel_power=4             !order of polynomial kernel
   length_kernel=0.05         !hyperparameter, test more!
   sigma_kernel=0.d0          !hyperparameter, set 0 in milady
   
   &end
