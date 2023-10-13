
Here we provide the inputs for some common tasks that involve different
types of fit, working with single-element and multi-component systems,
writing descriptors to the files, saving design matrix, etc. The input
files listed here are also provided in ``examples``.

.. _`ex:write-desc`:

Compute and write descriptors without further fit
-------------------------------------------------

This section provides an example of input to write atomic descriptors
into files, without performing further fit (task with ``ml_type=-1``).
This option is useful for structural analysis based on atomic
descriptors, as in  `​Nature Comm. 11: 4691 (2020)
<https://doi.org/10.1038/s41467-020-18282-2>`_
, visualization of
atomic systems in the descriptor space, or for using the computed
descriptors in conjunction with ML models not implemented in ``MiLaDy``,
e.g. as in Ref. 
`Messina et al (2020)
<https://doi.org/10.1016/j.nimb.2020.09.011>`_ . The relevant files can
be found in ``examples/compute_desc_only``.

.. code-block:: fortran

   &input_ml
   debug=.false.
   ml_type=-1                 !set -1 to compute descriptors only
   write_desc=.true.          !set true to write the files to descDB/
   desc_forces=.false.        !set true to compute the descriptors of forces

   !Define your system
   weighted=.false.           !set true for multicomponent systems
   chemical_elements=" Fe "   !provide the system composition
   
   !Descriptor settings
   r_cut=4.7d0                !set the cutoff distace Rc
   descriptor_type=9          !set 9 for bispectrum SO4
   j_max=4.0                  !angular moment for bispectrum SO4

   &end


To rescale the descriptor components between within the certain range of
values, e.g. [0,1], see the option ``rescale=.true.`` in Section
`3.1 <#sec:keywords>`__.