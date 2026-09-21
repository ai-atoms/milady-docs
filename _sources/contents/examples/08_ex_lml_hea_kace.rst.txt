
.. _`ex:LML-HEA-kACE`:

LML fit in HEA with kACE descriptor
--------------------------------------

This section provides an example of input file to perform a linear
ML (LML) fit for the equimolar Ta-Ti-V-W high entropy alloy (HEA)
using the kACE descriptor (``descriptor_type=300``, ``ace_radial_chem=3``), including
body orders 1 to 3, chemical low-rank tensor compression, and a
randomized SVD for the descriptor basis construction. The relevant
files are provided in ``examples/lml_hea_kace``.

.. code-block:: fortran

   &input_ml

   !ML mode
   ml_type=0

   !ML model
   mld_order=1                !set 1 for linear regression
   mld_fit_type=4              !lapack full SVD with rank estimation
   desc_forces=.true.           !set true to fit the forces

   !Define your system
   weighted=.true.               !set true for multicomponent systems
   fix_no_of_elements=4
   chemical_elements=" Ta Ti V  W"
   weight_per_element="0.8 0.9 1.0 1.1"  !for numerical stability, keep close to 1.0

   !Descriptor cutoff
   r_cut=4.7d0
   r_cut_width=0.5d0
   r_cut_in=1.2d0
   r_cut_width_in=0.4d0
   type_fcut=3

   !Descriptor type
   descriptor_type=300         !300 for ACE/kACE

   ace_numax=3                  !maximum ACE body order (here up to 3)
   ace_gencg=1                   !1 DRAFT redundant version; 2 SVD Dusson-Ortner version

   ace_chem=1                     !chemical embedding: 0 incomplete, 1 standard, 2 TS
   ace_radial_chem=3               !1 Ralf (standard ACE), 3 HSVD (kACE), 5 HSVD with random projection
   ace_chem_low_rank=1              !tensor compression of the chemical basis
   ace_chem_low_rank_q=8
   ace_chem_low_rank_niter=10        !default is 40
   ace_chem_low_rank_lambda=1.d-08

   ace_svd_randomized=1              !use a randomized SVD instead of the exact one
   ace_svd_randomized_oversample=10
   ace_svd_randomized_power_iter=2

   l_ace_order(1)=.true.
   l_ace_order(2)=.true.
   l_ace_order(3)=.true.
   l_ace_order(4)=.false.
   l_ace_order(5)=.false.
   l_ace_order(6)=.false.
   ace_nmax_list="4 2 1 1 1 1"
   ace_lmax_list="0 4 3 2 1 1"
   ace_lambda_list="3.0 3.0 3.0 3.0 3.0 3.0"
   ace_radial_poly=2            !1 powPftouny, 2 expPaftouny, 3 simpBessel

   &end

.. note::

   Since the fit is linear (``mld_order=1``), the size of the design
   matrix scales only linearly with the kACE descriptor dimension,
   which makes it practical to use a comparatively large basis (body
   orders up to 3) here. See :ref:`ex:QNML-HEA-ACE` for the same
   descriptor family used with a quadratic (QNML) fit, where the
   design matrix scales as the square of the descriptor dimension.
