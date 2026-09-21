
.. _`ex:LML-AFS-dump`:

LML fit in bcc Fe with AFS descriptor, dump/read
--------------------------------------------------

This section provides an example showing how to write the AFS
descriptors of a fit to files and read them back for a later fit,
and checks that the two ways of running the fit (classic vs.
write/read of dumped descriptors) give the same result. The relevant
files are provided in ``examples/lml_afs_read_write_dump``.

This example is run in three steps, each using a different ``vacancy.ml*``
file as the active ``vacancy.ml`` input, all in the same directory:

#. **classic fit** — ``vacancy.ml_classic``: perform the LML fit directly
   (``write_desc_dump=.false.``, ``read_desc_dump=.false.``). Output
   is stored in ``OUT_CLASSIC``.

#. **write dump** — ``vacancy.ml_write_dump``: perform the same fit while
   writing the AFS descriptors to disk (``write_desc_dump=.true.``).
   Output is stored in ``OUT_WRITE``.

#. **read dump** — ``vacancy.ml_read_dump``: perform the fit by reading
   back the previously dumped descriptors instead of recomputing them
   (``read_desc_dump=.true.``). Output is stored in ``OUT_READ``.

The three outputs should agree up to numerical error. Before each
step, copy the corresponding file onto ``vacancy.ml``, e.g.:

.. code-block:: bash

   cp vacancy.ml_classic vacancy.ml
   mpirun -np 2 milady_main.exe > OUT_CLASSIC

Typical ``vacancy.ml_classic`` file:

.. code-block:: fortran

   &input_ml
   debug=.false.

   !ML mode
   ml_type=0                  !set 0 to perform the fit using basis functions
   mld_order=1                !set 1 for linear regression
   mld_fit_type=3             !lapack full ortho decomposition with rank estimation

   !Writing/reading descriptors
   write_desc=.false.
   desc_forces=.true.         !set true to fit the forces and stress

   write_desc_dump=.false.    !set true to dump the descriptors to disk
   read_desc_dump=.false.     !set true to read previously dumped descriptors

   selection_type=1           !1 selects the first N_train elements of the database

   !Define your system
   weighted=.false.           !set true for multicomponent systems
   chemical_elements=" Fe "   !provide the system composition

   !Descriptor settings
   r_cut=4.7d0                !set the cutoff distance Rc
   descriptor_type=4          !set 4 for AFS
   afs_type=1                 !1 for standard AFS, 2 for modified AFS
   n_rbf=12                   !Number of radial channels
   n_cheb=8                   !Number of Chebyshev polynomials

   &end

For the write/read steps, only ``write_desc_dump``/``read_desc_dump``
change (set the relevant one to ``.true.``), see
``examples/lml_afs_read_write_dump/vacancy.ml_write_dump`` and
``vacancy.ml_read_dump``.
