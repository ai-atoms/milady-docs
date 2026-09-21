
.. _`ex:LML-ZBL`:

LML fit in bcc Fe with BSO4 descriptor, 2-body ZBL core
-----------------------------------------------------------

This section provides an example input file for performing a linear
ML (LML) fit with a BSO4 descriptor for bcc Fe, combined with a
short-range 2-body (K2B) correction and a ZBL repulsive core for
close interatomic distances. The relevant files are provided in
``examples/lml_fe_bso4_zbl``.

The ZBL potential takes over the many-body ML description below
``r1_zbl``, with a smooth transition handled by K2B between
``r1_zbl`` and the inner many-body cutoff ``r_cut_in``.

.. code-block:: fortran

   &input_ml
   debug=.false.

   !ML mode
   ml_type=0                  !set 0 to perform the fit using basis functions
   mld_order=1                !set 1 for linear regression

   write_desc=.false.
   desc_forces=.true.         !set true to fit the forces

   !Define your system
   weighted=.false.           !set true for multicomponent systems
   chemical_elements=" Fe "   !provide the system composition

   !Descriptor settings
   r_cut=4.7d0                !set the cutoff distace Rc
   descriptor_type=9          !set 9 for bispectrum SO4
   j_max=4                    !angular moment for bispectrum SO4

   !2-body (K2B) settings
   activate_k2b=.true.
   sigma_2b=0.3d0              !controls the smoothness of the interaction
   delta_2b=1.d0                !controls the magnitude (in eV) of a typical 2-body interaction
   np_radial_2b=40              !number of radial points in the 2-body grid
   r_cut_in=1.5d0                !many-body interaction is shut down below this distance (Ang)
   r_cut_width_in=0.3d0           !controls the smoothness of the inner cutoff
   type_fcut=3                     !type of cutoff function

   !ZBL settings
   zbl_potential=.true.        !activate the ZBL repulsive core
   r1_zbl=1.0d0                 !below this distance, only ZBL is used
   r2_zbl=2.2d0                  !controls the smoothness of ZBL

   &end
