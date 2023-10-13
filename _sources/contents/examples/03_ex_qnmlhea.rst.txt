
.. _`ex:QNML-HAE`:

QNML fit in HEA
---------------

Here we provide an example of input file to perform quadratic noise ML
(QNML) fit for Ta-Ti-V-W high entropy alloy (HEA). The relevant files
are provided in ``examples/qnml_hea_bso4``.

For the models like QNML we recommend setting ``mld_fit_type=4``, which
uses SVD with rank estimation. Other available settings for
``mld_fit_type`` can be found in Section `3.1 <#sec:keywords>`__.

.. code-block:: fortran

   &input_ml
   debug=.false.
   !ML model
   ml_type=0                  !set 0 to perform the fit using basis functions
   mld_order=2               !set 2 for quadratic regression
   mld_type_quadratic=1       !set 1 for QNML; 2 for conventional QML
   mld_fit_type=4            !lapack full SVD with rank estimation
   desc_forces=.true.         !set true to fit the forces

   weighted=.true.            !set true for multicomponent systems
   fix_no_of_elements=4       !number of chemical species in the system
   
   !system composition, ordered as in DB files
   chemical_elements=" Ta Ti V W "  

   !weights applied for each element. Keep close to 1
   weight_per_element=" 1.56 0.41 0.44 1.59 "   

   !Descriptor settings
   r_cut=4.7d0                !set the cutoff distace Rc
   descriptor_type=9          !set 9 for bispectrum SO4
   j_max=3.5                  !angular moment for bispectrum SO4


