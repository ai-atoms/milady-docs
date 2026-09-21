
.. _`ex:kernel-random`:

Kernel regression using a random kernel
----------------------------------------

Here we provide an example of input file to perform kernel noise ML
(KNML) fit for W using a random kernel, in a single step (unlike the
polynomial-kernel example above, no separate LML pre-fit or kernel
point selection step is required here). The relevant files are
provided in ``examples/kernel_r_fe_bso4``.

.. code-block:: fortran

   &input_ml
   debug=.false.

   !ML mode
   ml_type=1                  !set 1 to perform kernel fit
   mld_order=2                !set 2 for quadratic regression

   write_desc=.false.
   desc_forces=.true.         !set true to fit the forces

   !Define your system
   weighted=.false.           !set true for multicomponent systems
   chemical_elements=" Fe "   !provide the system composition

   !Descriptor settings
   r_cut=4.7d0                !set the cutoff distace Rc
   descriptor_type=9          !set 9 for bispectrum SO4
   j_max=4                    !angular moment for bispectrum SO4

   !Kernel sparsification (if needed)
   write_kernel_matrix=.false.
   power_mcd=0.05d0
   kernel_dump=3               !3 for dump by MCD/MAHALANOBIS

   !Kernel settings
   np_kernel_ref=2000          !number of proposed points in the MCD class
   np_kernel_full=2000         !number of points outside the MCD class
   kernel_type=7               !set 7 for a random kernel
   sigma_kernel=0.02

   &end
