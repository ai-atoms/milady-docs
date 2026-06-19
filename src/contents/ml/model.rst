
.. _`sec:models`:

ML tasks
=========

Here we describe the key words controlling the settings of models in ``input.ml`` file.


.. option:: ml_type (integer)

  The type of of ML task.
  The following options are possible:

  +------------------------------------------------------------+
  |                **Regression models**                       |
  +---------------+--------------------------------------------+
  | ``ml_type=0`` | Regression using basis functions           |
  |               | (e.g. LML, QNML, polynomial chaos, etc.)   |
  +---------------+--------------------------------------------+
  | ``ml_type=1`` | Kernel ridge regression                    |
  +---------------+--------------------------------------------+
  | ``ml_type=2`` | *Reserved only for advanced users*         |
  +---------------+--------------------------------------------+
  |                    **Other tasks**                         |
  +---------------+--------------------------------------------+
  | ``ml_type=-1``| Compute descriptors only without any fit   |
  +---------------+--------------------------------------------+
  | ``ml_type=-2``| Analyze the data and, if required, make    |
  |               | a choice of kernel to use in ``ml_type=1`` |
  +---------------+--------------------------------------------+


  Default is ``ml_type=0``.

.. _`sec: desc_only`:

Descriptors only
^^^^^^^^^^^^^^^^

The following keywords are useful for the tasks with ``ml_type=-1``, where descriptors are computed and written into files without performing regression. Other types of ``ml_type`` do not exclude using these options. For the descriptor-specific settings, see the :ref:`Descriptors section<sec:descriptors>`.

.. option::  desc_forces (logical)

  This key word controlls wheather the descriptors of forces are computed or not. When setting ``desc_forces=.true.``, please verify that descriptors of forces are implemented for the :ref:`descriptor<sec:descriptors>` that you choose.

  Default is ``desc_forces=.false.``

.. option::  write_desc (logical)

  This key word activates writing descriptors into files. When using ``ml_type=-1``, consider setting ``write_desc=.true.``

  Default is ``write_desc=.false.``

**Example:** typical commands for the task of computing descriptors (e.g. for structural analysis)

.. code-block:: fortran

   ml_type=-1
   write_desc=.true.
   desc_forces=.false.

More examples can be found in the :ref:`Examples section<ex:write-desc>`



.. _`sec: regression`:

Regression models  
=================


Type of regression
^^^^^^^^^^^^^^^^^^


The following options are relevant for the ``ml_type=0`` regression models with basis functions (linear in parameters models) namely:
linear (LML), quandratic (QNML, QML) or polynomial chaos. 
The kernel regressions require separate treatment threfore the options for kernel models are presented in separate 
section :ref:`Kernel section<sec:kernel>`. 

.. option::  mld_order (integer)

   Define the type of regression the descriptor space: 

   - ``mld_order = 1`` this enable a linear fit (known also as LML) and will gives :math:`1+D` parameters

   - ``mld_order = 2`` this enable a quandratic fit and will gives  :math:`1 + D + D^2` parameters. In this case 
     there is a supplementary choice about the type of quandratic model by the option  ``snap_type_quadratic``.  
     About the quadratic fit see Goryaeva et al. 2021 for more details. 

   - ``mld_order = 3``  this enable a polynomial chaos type of fitting. Two others parameters should be set: ``polyc_n_poly`` 
     and ``polyc_n_hermite``. The number of paramters is very large given by this formulae: 
     1 + ``polyc_n_hermite`` :math:`\times D` + ``polyc_n_hermite`` :math:`\times D^2` + 
     + ... + ``polyc_n_hermite`` :math:`\times D` :sup:`polyc\_n\_poly`  

   Default is ``mld_order = 1``.

.. option::  mld_type_quadratic (integer)

   The type of quadratic fit. For
   the case 1 the solution is preconditionned by the linear fit i.e.
   the first 1 + :math:`D` are exactelly set to the LML solution and
   only the remaining :math:`D^2` parameters are fitted quadratically.
   For the case 2 the full quadratic solution is provided, all the
   parameters are fitted without preconditionning. Shortly speaking   
   ``mld_type_quadratic=1`` is for  QNML and ``mld_type_quadratic=2`` is for QML.
   See Goryaeva et al. 2021 for more details. 

   Default is ``mld_type_quadratic = 1``.

.. option:: polyc_n_poly (integer)

   active for polynomial chaos regression i.e. ``mld_order=3``. Is the order of polynomial degree.

   Default is ``polyc_n_poly=3``.  

.. option::  polyc_n_hermite (integer) 
   
    The maxiumum degree for Hermite polynomials for the polynomial chaos regression. ``Milady`` handle Hermite basis up to the 4 :sup:`th` order.      

    Default is ``polyc_n_hermite=2``.


Solving algorithm
^^^^^^^^^^^^^^^^^


.. option::  mld_fit_type (integer)

  The type of algorithm used in order to
  solve least square (LS) problem :math:`\mathbf{A} \beta= \mathbf{b}`.
  We recommend without any hesitation ``mld_fit_type = 4``. 

  :math:`\mathbf{A}` is :math:`M \times D` matrix, :math:`M` being the
  number of observations and :math:`D` the number of parameters (in the
  case of linear ML the dimension of descriptor + 1), :math:`\beta` the
  parameter matrix :math:`D \times 1` and :math:`\mathbf{b}` the
  observations matrix :math:`M \times 1`. Actually in the ``MiLaDy``
  implementation we build :math:`\mathbf{Amat}` matrix that has the
  dimensions :math:`d \times m` being in fact :math:`\mathbf{A}^T`
  (with the notation used for this documentation):  

  #. ``mld_fit_type=0``: home made solver  based on LU / QR decomposition for general matrix. 
     There is no any particular assuption for the size or rank of  :math:`\mathbf{A}`  matrix. 
     All the cases :math:`M > D`, :math:`M < D` and :math:`M = D` are treated. 

  #. ``mld_fit_type=1``: solution based on QR
     decomposition for serial and ScaLapack version.  
     Adapted for full rank matrix :math:`\mathbf{A}` and use the assumption
     that :math:`\textrm{rank}(A) = \min(M,D)`, in other words,
     :math:`A` has full rank. 
     In serial version,  if :math:`\mathbf{A}` is not full rank the inversion will stop with a
     error. Uses a QR or LQ factorization of :math:`\mathbf{A}`. 

  #. ``mld_fit_type=2``: **restricted only for advanced users** 
     Solution with constraints. The constraints are of form
     :math:`\mathbf{B}x=\mathbf{d}`. The matrix :math:`\mathbf{B}` and
     the vector :math:`\mathbf{d}` are filled with all the data (input
     and target for energy, force or stress) contained in the class
     fixed by ``snap_class_constraints``.   

  #. ``mld_fit_type=3``: For serial version this is adapted for the general case when we 
     may have :math:`\textrm{rank}(\mathbf{A}) < \min(M,D)`, in other words,
     :math:`\mathbf{A}` may be rank-deficient, we seek the minimum norm
     least squares solution :math:`\beta` which minimizes both
     :math:`\left| \beta \right|^2` and
     :math:`\left| b - A \beta \right|^2`. With this option a rank 
     estimation is possible. The ScaLapack version uses Cholesky decomposition for symmetric and 
     positive definite matrix consequnetly sometimes should be avoided.   

     .. warning:: 
        Avoid this solution for Scalapack version. Is very likely to obtain weird results in the 
        most favorable cases but probably you will have segmetation fault and or ``NaN`` as 
        parameters :)).      

  #. ``mld_fit_type=4``: In the general case when we may have
     :math:`\textrm{rank}(\mathbf{A}) < \min(M,D)`, in other words,
     :math:`\mathbf{A}` may be rank-deficient, we seek the minimum norm
     least squares solution :math:`\beta` which minimizes both
     :math:`\left| \beta \right|^2` and
     :math:`\left| b - A \beta \right|^2`. Is the slowest but is by far mathematically
     most complete solution based on SVD decomposition.
     With this option a rank estimation (via SVD and driven by the option ``svd_rcond``).

  #. ``mld_fit_type=5``: **ALS-Ridge block preconditioning** (alternating least
     squares with ridge regularization). The design matrix is partitioned into
     ``als_nu_max`` row-blocks (one per descriptor body order, usually
     auto-detected); each block is renormalized by a coefficient
     :math:`\alpha_b` and the parameters are obtained by block-wise ridge
     regression on the scaled matrix. It is well suited to multi-body
     descriptors (e.g. ACE) whose blocks have very different scales. The
     behaviour is controlled by the ``als_*`` options described in the
     :ref:`ALS-Ridge solver options<sec:als_options>` below. See
     *MiladyNoteTechnique5.pdf* (sections 1.10.1 and 1.10.2).

  #. ``mld_fit_type=6``: **Online (streaming) solver**. Instead of storing the
     full design matrix :math:`\mathbf{A}`, the :math:`D \times D` Gram matrix
     :math:`\mathbf{G}=\mathbf{A}\mathbf{W}\mathbf{A}^T` and the right-hand side
     :math:`\mathbf{A}\mathbf{W}\mathbf{y}` are accumulated one configuration at
     a time, then the small :math:`D \times D` system is solved by SVD. This
     drastically reduces the memory footprint for very large training sets
     (millions of configurations), at the price of recomputing the descriptors
     once at prediction time. The options ``lambda_krr`` and ``svd_rcond`` keep
     the same meaning as for ``mld_fit_type=4``.

Default is ``mld_fit_type=4``.



.. option::  svd_rcond (real)

   The  value of the limit from which the singular eigenvalues of the design 
   matrix :math:`(\mathbf{A})` (or any matrix) are zero. Any eigenvalue lower that this limit is 
   treated as zero. Obviously the value of ``svd_rcond`` has an impact on 
   the :math:`\textrm{rank}(\mathbf{A})`. 
   If a negative value is choosen then ``Milady`` fix ``svd_rcond=100.d0*epsilon(1.d0)`` where 
   epsilon is the Lapack machine precision function (around ``1.d-15`` in most of the cases).   

   Default is ``svd_rcond=-1``.


.. option::  snap_class_constraints (character)

   The class that imposes the constraints on fit. Is active only if
   ``mld_fit_type=2``. All the configuration mentioned in this class
   will fill the constraints matrix :math:`\mathbf{B}` and the target
   vector :math:`\mathbf{d}`.

   Default is ``"07"``.

.. option::  write_design_matrix (logical)

   Dump the design matrix, which contains the descriptors (energy, force and stress if 
   mentioned in  ``db_model.in``) and
   the weigths. The design matrix is writen design in file ``design_matrix.dat``.
   This matrix has the dimension ``number_of_data`` :math:`\times` ``dim_desc``, where
   number_of_data are the number of data points (energy, force or
   stress) used to fit the potential and ``dim_desc`` is the dimension
   of descriptor. And additional file ``design_matrix.info`` is written with information 
   about the database used for trainning. 
   
   This option is active for normal trainning (``ml_type >= 0``).

   .. warning:: 
      The design matrix is written as the transpose of the matrix used internally by ``milady`` 
  

   **Format of the design_matrix.dat :**

   -  The first 3 lines  are comments 
   -  Then are ``number_of_data`` lines with ``dim_desc`` columns. 

   **Format of the design_matrix.info :**

   -  The first 5 lines are comments. 
   -  Then there are ``number_of_data`` lines with ``4`` columns.
   -  The first column is a tag that indicates whether the corresponding line comes from energy (1), force (2), or stress (3).
   -  The second column gives the target value (energy, force, or stress) used for training.
   -  The third column indicates the weight used for that data point in the loss function.
   -  The fourth column indicates the source file of that data point.

   Default ``write_design_matrix=.false.``


.. _`sec:als_options`:

ALS-Ridge solver options
^^^^^^^^^^^^^^^^^^^^^^^^^

The following options are active **only** when ``mld_fit_type=5`` (ALS-Ridge
block preconditioning). They have no effect for the other solvers. See
*MiladyNoteTechnique5.pdf* (sections 1.10.1 and 1.10.2) for the underlying
algorithm.

.. option:: als_nu_max (integer)

   The number of row-blocks of the design matrix. In most cases it is
   auto-detected from the descriptor structure (e.g. the ACE body orders) and
   does not need to be set by hand; with ``als_nu_max=1`` the whole matrix is
   treated as a single block.

   Default ``als_nu_max=1``.

.. option:: als_alpha_method (integer)

   How the block renormalization coefficients :math:`\alpha_b` are obtained:

   - ``als_alpha_method=0``: *fixed alpha* — the :math:`\alpha_b` are computed
     once from the preconditioner and a single ``w``-step is performed
     (section 1.10.1).
   - ``als_alpha_method=1``: *learning alpha* — the :math:`\alpha_b` are updated
     at each ALS iteration by solving the alpha sub-problem (section 1.10.2).

   Default ``als_alpha_method=1``.

.. option:: als_nsteps (integer)

   The maximum number of outer ALS iterations. With ``als_alpha_method=0`` a
   single ``w``-step is performed regardless of this value.

   Default ``als_nsteps=10``.

.. option:: als_tol (real)

   The convergence tolerance on the relative change of :math:`\mathbf{w}` and
   :math:`\alpha`. A negative value disables the check and runs exactly
   ``als_nsteps`` iterations. Only used when ``als_alpha_method=1``.

   Default ``als_tol=-1.0``.

.. option:: als_precond_type (integer)

   The preconditioner used both for the initial :math:`\alpha` and for the
   per-column ridge vector :math:`\boldsymbol{\lambda}`:

   - ``als_precond_type=0``: Frobenius-norm scaling.
   - ``als_precond_type=1``: SVD-based scaling (largest singular value of each block).
   - ``als_precond_type=2``: flat — no scaling, uniform ridge set to ``lambda_krr``.

   Default ``als_precond_type=0``.

.. option:: als_ridge_k (real)

   The global ridge parameter :math:`k>0` controlling the per-column ridge
   :math:`\lambda_i = k\,\|A^{(b)}\|_F^2 / D_b`, where :math:`D_b` is the number
   of rows of block :math:`b`. It is ignored when ``als_precond_type=2`` (where
   ``lambda_krr`` is used instead).

   Default ``als_ridge_k=1.d-3``.

.. option:: als_rho (real)

   The Tikhonov regularization of the (small) alpha sub-problem
   :math:`(\mathbf{B}^T\mathbf{B}+\rho\,\mathbf{I})\,\alpha = \mathbf{B}^T\mathbf{y}`.
   Only used when ``als_alpha_method=1``.

   Default ``als_rho=1.d-6``.

.. option:: als_nnls_alpha (logical)

   If ``.true.``, enforce :math:`\alpha_b \ge 0` through a Non-Negative Least
   Squares (NNLS) solve of the alpha sub-problem, which acts as a block/feature
   selection. Only effective when ``als_alpha_method=1``.

   Default ``als_nnls_alpha=.false.``.

.. option:: als_nnls_mode (integer)

   The NNLS algorithm used when ``als_nnls_alpha=.true.``:

   - ``als_nnls_mode=0``: Lawson-Hanson (cold start, re-initialized each step).
   - ``als_nnls_mode=1``: Bunch-Kaufman warm-start (persistent active set, faster
     convergence and more stable feature selection).

   Default ``als_nnls_mode=0``.


Regularization and loss
^^^^^^^^^^^^^^^^^^^^^^^



.. option::  mld_regularization_type (integer)

   #. ``mld_regularization_type``\ =0: no regularization

   #. ``mld_regularization_type``\ =1: applies the regularized solution
      of parameters, :math:`\mathbf{w}(\lambda_{krr})` found by the
      Moore-Penrose inversion:

      .. math:: \mathbf{w}(\lambda_{krr})= \left( \mathbf{A}^T \mathbf{A} + \lambda_{rr} \mathbf{I} \right)^{-1} \mathbf{A}^T \mathbf{y}

      The properties of the logarithmic search grid of
      :math:`\lambda_{krr}` are defined by the following parameters:

      -  | ``real``, ``min_lambda_krr`` and ``max_lambda_krr`` the min
           and max of the logarithmic grid. If one of them is negative
           then an automatic grid with 21 points is set-up between
           ``1.d-10`` and ``1.d+10``.
         | Default ``min_lambda_krr =1.d-10`` and
           ``max_lambda_krr =1.d+10``.

      -  | ``integer``, ``n_values_lambda_krr`` the number of points on
           grid.
         | Default ``n_values_lambda_krr=21``

   Default is ``0``.

   .. note::
      ``mld_regularization_type`` controls the regularization for the standard
      basis-function/kernel solvers. The dedicated solvers carry their own
      ridge regularization: ``mld_fit_type=5`` (ALS-Ridge) uses ``als_ridge_k``
      / ``als_rho`` (or ``lambda_krr`` in flat mode), and ``mld_fit_type=6``
      (online) adds ``lambda_krr`` to the diagonal of the Gram matrix.


.. option:: type_of_loss (integer)

   This option defines the type of the loss function. It can have values 1, 2 or 3.
   The loss function has the following four terms:

   .. math:: J(\mathbf{w}) = J_E(\mathbf{w}) + J_F(\mathbf{w}) + J_S(\mathbf{w}) + R(\mathbf{w}, \lambda) \, ,

   for energy, forces, stress losses and regularization, respectively.

   We have implemented three types of losses. Here are the details for each
   of them. The energy part of loss:

   .. math::

      \begin{aligned}
          J_E^1(\mathbf{w}) & = & \frac{1}{2}
             \sum_{m_E=1}^{M_E} \omega_{m_E}\left( E_{m_E} - \hat{E}_{m_E}(\mathbf{w})  \right)^2 \\
          J_E^2(\mathbf{w}) & = & \frac{1}{2}
             \sum_{m_E=1}^{M_E} \frac{ \omega_{m_E}} {M_E} \left( E_{m_E} - \hat{E}_{m_E}(\mathbf{w})  \right)^2 \\
          J_E^3(\mathbf{w}) & = & \frac{1}{2}
             \sum_{m_E=1}^{M_E} \frac{ \omega_{m_E}} {M_E} \left(
             \frac{E_{m_E} - \hat{E}_{m_E}(\mathbf{w})}{N_{m_E}}  \right)^2\end{aligned}

   where :math:`M_E` are the number of energy configuration included in the
   train database whilst :math:`\omega_{m_E}` (the one which is defined in the ``db_model.in`` file) and :math:`N_{m_E}` are the
   weights and the number of atoms of the :math:`m_E^{\textrm{th}}`
   configuration.

   In the case of forces:

   .. math::

      \begin{aligned}
          J_F^1(\mathbf{w}) & = & \frac{1}{2}
             \sum_{m_F=1}^{M_F} \omega_{m_F}\left( f_{m_E} - \hat{f}_{m_E}(\mathbf{w})  \right)^2 \\
          J_F^2(\mathbf{w}) & = & \frac{1}{2}
             \sum_{m_f=1}^{M_F} \frac{ \omega_{m_F}} {M_F} \left( f_{m_F} - \hat{f}_{m_F}(\mathbf{w})  \right)^2 \\
          J_F^3(\mathbf{w}) & = & \frac{1}{2} \frac{1}{M_{F,S}} \sum_{s=1}^{M_{F,S}} \sum_{a=1}^{N_s} \frac{1}{3 N_{s}}
          \left( f_{s,a} - \hat{f}_{s,a}(\mathbf{w}) \right)^2\end{aligned}

   where :math:`\omega_{m_F}` is the weight of the
   :math:`m_F^{\textrm{th}}` point in the forces database of a total of
   :math:`M_F` datapoints. :math:`M_{F,S}` is the number of systems, which
   contain forces that should be fitted, :math:`s` is some order nummber of
   the system and :math:`N_s` is the the number of atoms in that :math:`s`
   system.

   In the case of stress:

   .. math::

      \begin{aligned}
          J_S^1(\mathbf{w}) & = & \frac{1}{2}
             \sum_{m_S=1}^{M_S} \omega_{m_S}\left( \sigma_{m_S} - \hat{\sigma}_{m_S}(\mathbf{w})  \right)^2 \\
          J_S^2(\mathbf{w}) & = & \frac{1}{2}
             \sum_{m_S=1}^{M_S} \frac{ \omega_{m_S}} {M_S} \left( \sigma_{m_S} - \hat{\sigma}_{m_S}(\mathbf{w})  \right)^2 \\
          J_F^3(\mathbf{w}) & = & \frac{1}{2} \frac{1}{M_{S,S}} \sum_{s=1}^{M_{S,S}} \sum_{\alpha=1}^{6} \frac{1}{6}
          \left( \sigma_{s, \alpha} - \hat{\sigma}_{s, \alpha}(\mathbf{w}) \right)^2\end{aligned}

   where the above notations have  the same meaning as in the case of forces. :math:`M_S` denotes the number of datapoints
   of stress observables (6 points for each system).  :math:`M_{S,S}` denotes the number of systems that have stress information.
   and :math:`\sigma_{s, \alpha}` is one component of the stress in the particular system :math:`s`.

   Default is ``1``.


.. option::  train_only (loginal)

   Only the trainning is performed.
   No tests at all. This option is tested only in the
   case of ``ml_type=0``. target vector :math:`d`.

   Default is ``.false.``.
