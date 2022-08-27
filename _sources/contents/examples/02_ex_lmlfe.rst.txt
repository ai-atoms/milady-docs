
.. _`ex:LML-Fe`:

LML fit in bcc Fe
-----------------

This section provides an example input an input file for performing
linear ML (LML) fit with AFS descriptors for bcc Fe. The relevant files
are provided in ``Examples/LML_Fe_AFS``.

We note that in this example, the fit is performed using a default
home-made subroutine solving the least square problem. In order to set a
different subroutine, see the available settings for ``mld_fit_type``
in Section `3.1 <#sec:keywords>`__.

.. code-block:: fortran

   &input_ml
   debug=.false.
   !ML model
   ml_type=0                  !set 0 for the fit using basis functions
   snap_order=1               !set 1 for linear regression
   desc_forces=.true.         !set true to fit the forces
   
   !Define your system
   weighted=.false.           !set true for multicomponent systems
   chemical_elements=" Fe "   !provide the system composition
   
   !Descriptor settings
   r_cut=4.7d0                !set the cutoff distance Rc
   descriptor_type=4          !4 for AFS
   afs_type=1                 !1 for standard AFS, 2 for modified AFS
   n_rbf=10                   !Number of radial channels
   n_cheb=8                   !Number of Chebyshev polynomials
   
   &end


