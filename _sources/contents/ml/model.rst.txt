
.. _`sec:models`:

ML models
=================

.. option:: ml_type (integer)

   Machine learning algo. The options are:

   #. ``ml_type = -2`` analyze the data and, if required, made an
      intelligent choice of kernel used for mode ``ml_type=1``.

   #. ``ml_type=-1`` Just compute the descriptors (please pay attention
      to activate the writting with ``write_desc=.true.``)

   #. ``ml_type=0`` basis function (e.g. LML, QNML, polynomial chaos, 
   Sobol series etc)

   #. ``ml_type=1`` kernel ridge regression

   #. ``ml_type=2`` **reserved only for advanced users**

   Default is ``0``.

.. option::  snap_order (integer)

   The order of fit. This can have the
   values of 1 or 2 for linear (1 + :math:`D` parameters) or quadratic
   regression (1 + :math:`D` + :math:`D^2` parameters), respectivelly,
   in the descriptor space. For the case ``snap_order = 2`` it should
   be set also the type of the quadratic regression.

   Default is ``1``.

.. option::  snap_type_quadratic (integer)

   The type of quadratic fit. For
   the case 1 the solution is preconditionned by the linear fit i.e.
   the first 1 + :math:`D` are exactelly set to the LML solution and
   only the remaining :math:`D^2` parameters are fitted quadratically.
   For the case 2 the full quadratic solution is provided, all the
   parameters are fitted without preconditionning.

   Default is ``1``.

.. option::  snap_fit_type (integer)

   The type of subroutine used in order to
   solve least square (LS) problem :math:`\mathbf{A} \beta= \mathbf{b}`.
   :math:`\mathbf{A}` is :math:`m \times d` matrix, :math:`m` being the
   number of observations and :math:`d` the number of parameters (in the
   case of linear ML the dimension of descriptor + 1), :math:`\beta` the
   parameter matrix :math:`d \times 1` and :math:`\mathbf{b}` the
   observations matrix :math:`m \times 1`. Actually in the MiLaDy
   implementation we build :math:`\mathbf{Amat}` matrix that has the
   dimensions :math:`d \times m` being in fact :math:`\mathbf{A}^T`
   (with the notation used for this manual):

   #. ``snap_fit_type=0``: home made subroutine based on inversion of a 
      symmetric real matrix ( :math:`\mathbf{A}^T \mathbf{A}`) using Bunch-Kaufman
      diagonal pivoting method.

   #. ``snap_fit_type=1``: solution based on QR
      decomposition. Adapted for full rank matrix :math:`\mathbf{A}`.
      In :math:`\mathbf{A}` is not full rank the inversion stop with a
      error. This option use the assumption
      that :math:`\textrm{rank}(A) = \min(m,b)`, in other words,
      :math:`A` has full rank, finding a least squares solution of an
      overdetermined system when :math:`m > d`, and a minimum norm
      solution of an underdetermined system when :math:`m < d`.
      Uses a QR or LQ factorization of :math:`\mathbf{A}`.

   #. ``snap_fit_type=2``: **restricted only for advanced users** 
      Solution with constraints. The constraints are of form
      :math:`\mathbf{B}x=\mathbf{d}`. The matrix :math:`\mathbf{B}` and
      the vector :math:`\mathbf{d}` are filled with all the data (input
      and target for energy, force or stress) contained in the class
      fixed by ``snap_class_constraints``. 

   #. ``snap_fit_type=3``: In the general case when we may have
      :math:`\textrm{rank}(\mathbf{A}) < \min(m,b)`, in other words,
      :math:`\mathbf{A}` may be rank-deficient, we seek the minimum norm
      least squares solution :math:`\beta` which minimizes both
      :math:`\left| \beta \right|^2` and
      :math:`\left| b - A \beta \right|^2`. With this option a rank 
      estimation is possible.

   #. ``snap_fit_type=4``: In the general case when we may have
      :math:`\textrm{rank}(\mathbf{A}) < \min(m,b)`, in other words,
      :math:`\mathbf{A}` may be rank-deficient, we seek the minimum norm
      least squares solution :math:`\beta` which minimizes both
      :math:`\left| \beta \right|^2` and
      :math:`\left| b - A \beta \right|^2`. With this option a
      rank estimation is possible.

   Default is ``0``.

.. option::  snap_class_constraints (string(len=2))

   The class that imposes the constraints on fit. Is active only if
   ``snap_fit_type=2``. All the configuration mentioned in this class
   will fill the constraints matrix :math:`\mathbf{B}` and the target
   vector :math:`\mathbf{d}`.

   Default is ``"07"``.

.. option::  snap_regularization_type (integer)

   #. ``snap_regularization_type``\ =0: no regularization

   #. ``snap_regularization_type``\ =1: applies the regularized solution
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

   .. warning::
      Not fully tested


.. option::  iread_ml (integer)

   0 compute on the fly, 1 read from previous run.

   Default is ``0``.

   .. warning::
      Not fully tested


.. option:: isave_ml (integer)

   0 do nothing, 1 write on the HDD and run, 2 MPI and threading.

   Default is ``0``.

   .. warning::
      Not fully tested

.. option::  kcross (logical)

   Default is ``.false.``.

.. option::  marginal_likelihood (logical)

   Default is ``.false.``.

.. option::  sparsification (logical)

   Default is ``.false.``.

.. option::  n_kcross (integer)

   Default is ``0``.

.. option::  target_type (integer)

   1 - energy, 2 - force.

   Default is ``1``.

.. option::  force_comp (integer)

   1 - x component of forces, 2 - y
   component of forces, 3 - z component of forces.

   Default is ``1``.

.. option::  toy_model (logical)

   Type of the database:

   #. ``toy_model=.true.`` Database is generated using an analytical
      function on which is applied some noise (:math:`L` being a
      parameter and D the dimensionality of one point of the data):

      .. math::

         f(\mathbf{x}, L) =
                         \begin{cases}
                          \sin \left( \frac{2 \pi x_1 }{L} \right) & \text{if } \mathbf{x} \in  \mathbb{R}^1 \\
                          \sin \left( \frac{2 \pi x_1 }{L} \right)  +
                           \cos \left( \frac{2 \pi x_2 }{L} \right)  & \text{if }  \mathbf{x} \in  \mathbb{R}^2 \\
                            \sin \left( \frac{2 \pi x_1 }{L} \right)  +
                            \cos \left( \frac{2 \pi x_2 }{L} \right) +
                            \sum_{i=3}^D \exp{ \frac{1}{2 L} \left(x_i-\frac{L}{i-2} \right)^2 } & \text{if }  \mathbf{x} \in  \mathbb{R}^D, \text{with D $\ge$ 3}  \\
                         \end{cases}
                       \nonumber

   #. ``toy_model=.false.`` Database was already computed. In order to
      manage the database input please read the section
      `4 <#sec:odatafiles>`__.

   Default is ``.false.``
