
.. _`ex:QNML-HEA-ACE`:

QNML fit in HEA with ACE descriptor
--------------------------------------

This section provides an example of input file to perform a
quadratic noise ML (QNML) fit for the equimolar Ta-Ti-V-W high
entropy alloy (HEA) using the ACE descriptor (``descriptor_type=300``).
The relevant files are provided in ``examples/qnml_hea_ace``.

.. code-block:: fortran

   &input_ml

   !ML mode
   ml_type=0

   !ML model
   mld_order=2                  !set 2 for quadratic regression
   mld_type_quadratic=1          !1 default +LML precondition, 2 full quadratic, 3 bi-linear, 4/5 zx/ZX
   desc_forces=.true.             !set true to fit the forces

   !ML train
   mld_fit_type=4                  !lapack full SVD with rank estimation

   !Define your system
   weighted=.true.                  !set true for multicomponent systems
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
   descriptor_type=300           !300 for ACE/kACE

   ace_numax=2                     !maximum ACE body order
   ace_gencg=2                      !2 for SVD Dusson-Ortner version
   ace_chem=1                        !1 for standard chemical embedding
   ace_radial_chem=1                  !1 Ralf (standard ACE), 3 HSVD (kACE), 5 HSVD with random projection

   l_ace_order(1)=.true.
   l_ace_order(2)=.true.
   l_ace_order(3)=.false.
   l_ace_order(4)=.false.
   l_ace_order(5)=.false.
   l_ace_order(6)=.false.
   ace_nmax_list="1 1 1 1 1 1"
   ace_lmax_list="0 0 1 1 1 1"
   ace_lambda_list="3.0 3.0 3.0 3.0 3.0 3.0"
   ace_radial_poly=2               !1 powPftouny, 2 expPaftouny, 3 simpBessel

   &end

.. warning::

   With a quadratic fit (``mld_order=2``), the design matrix scales
   as the **square** of the ACE descriptor dimension (one row per
   quadratic feature, one column per training data point), while a
   linear fit only scales linearly (see :ref:`ex:LML-HEA-kACE`).
   Increasing ``ace_numax``, ``ace_nmax_list`` or ``ace_lmax_list``
   quickly makes the design matrix, and the SVD-based fit
   (``mld_fit_type=4``) used to solve it, very memory hungry. The
   basis kept in the file above is deliberately small so that this
   example completes on a modest workstation (a few tens of seconds,
   well under 1 GB); on a machine with more memory, larger values of
   ``ace_numax``/``ace_nmax_list``/``ace_lmax_list`` (as in
   :ref:`ex:QNML-HAE` for the BSO4 descriptor) can be used for a more
   representative fit.
