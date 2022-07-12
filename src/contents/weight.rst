Optimization of weights using genetic algorithm
===============================================

The weights of the various componenets in the database are optimized,
using an genetic algorithm, through the following objective function:

.. math::

   J(\mathbf{w}) = f_e \textrm{MAE}_e (\mathbf{w})+ f_f \textrm{MAE}_f (\mathbf{w})+ f_s \textrm{MAE}_s(\mathbf{w})
   \label{eq:ga_opt}

MAE is the mean average error for energy, force or stress and :math:`f`
is the multiplicative factor for each of them. These multiplicative
factors are provided by the user (see below in this section). The
optimization of weights are activated through
``optimize_weights=.true.`` option and can be customized by 5 optional
commands.

.. option::  optimize_weights (logical)

   Activate or not the optimization through genetical algorithm.
   
   Default ``optimize_weights=.false.``

.. option::  class_no_optimize_weights (character(len=90)) 

   The classes (with the same names / numbers as in ``db_file``) for which the the
   optimization through genetical algorithm is no activated . If there
   are many classes, theirs names should be separated by space (see
   the default value for an example)
   This option is active only if ``optimize_weights=.true.``
   Example: ``class_no_optimize_weights=" 02 06 "`` - no optimization
   for the classes ``02`` and ``06``.
   
   Default: ``class_no_optimize_weights=" "``

.. option::  optimize_ga_population (integer) 
   
   The size of the population of  genetical algorithm.
   
   Default ``optimize_ga_puplation=80``

.. option::  optimize_weights (logical) 

   Activate or not the optimization through genetical algorithm.
   
   Default ``optimize_weights=.false.``

.. option::  optimize_weights_L1 (logical) 

   The regularization is performed
   by adding a :math:`L^1` function on the objective function from
   Eq.\ `[eq:ga_opt] <#eq:ga_opt>`__. The weigths are optimized in the
   same time as the ``lambda_krr`` regularizitation parameter. The new
   objective function becomes:

   .. math:: J(\mathbf{w}) = J(\mathbf{w}) + \lambda_{krr} \sum_k \left|  w_k \right|
   
   Default ``optimize_weights_L1=.false.``

.. option::  optimize_weights_L2 (logical) 

   The regularization is performed
   by adding a :math:`L^2` function on the objective function from
   Eq.\ `[eq:ga_opt] <#eq:ga_opt>`__. The weigths are optimized in the
   same time as the ``lambda_krr`` regularizitation parameter. The new
   objective function becomes:

   .. math:: J(\mathbf{w}) = J(\mathbf{w}) + \lambda_{krr} \sum_k \left|  w_k \right|^2

   Default ``optimize_weights_L1=.false.``

.. option::  optimize_weights_Le (logical) 

   The regularization is performed
   by adding a :math:`L^2` + :math:`L^1` function on the objective
   function from Eq.\ `[eq:ga_opt] <#eq:ga_opt>`__. The weigths are
   optimized in the same time as the ``lambda_krr`` regularizitation
   parameter. The new objective function becomes:

   .. math:: J(\mathbf{w}) = J(\mathbf{w}) + \lambda_{krr} \sum_k \left|  w_k \right|^2 + \lambda_{krr} \sum_k \left|  w_k \right|
   
   Default ``optimize_weights_Le=.false.``

.. option::  max_iter_optimize_weights (integer) 
   
   The maximum number of optimization steps
   
   Default: ``max_iter_optimize_weights=40``

.. option::  factor_energy_error (real) 

   The factor for energy in the
   objective function (:math:`f_e` in the
   Eq. `[eq:ga_opt] <#eq:ga_opt>`__).
   
   Default: ``force_energy_error=1.d0``

.. option::  factor_force_error (real) 

   The factor for force in the
   objective function (:math:`f_f` in the
   Eq. `[eq:ga_opt] <#eq:ga_opt>`__).
   Default: ``force_force_error=1.d0``

.. option::  factor_stress_error (real) 
   
   The factor for energy in the
   objective function (:math:`f_s` in the
   Eq. `[eq:ga_opt] <#eq:ga_opt>`__).
   
   Default: ``force_stress_error=1.d0``

This option is active only if the option ``optimize_weights=.true.`` in
the in ``name.ml`` file. Each line of the DB file, ``db_model.in``,
activate, by default, the weigths optimization. The :math:`l^{th}` line
from ``db_model.in`` introduce three weigths that will be optimized,
:math:`w^l_e`, :math:`w^l_f` and :math:`w^l_s` that stand for the
weights for energy, force and stress, respectivelly. Potentially, the
maximum value of number of weights (the number of arguments of the
genetic algorithm function) is equal to the number of lines of the DB
file, ``db_model.in``), times three. However, this can be lower, using
the option ``class_no_optimize_weights`` we can exclude some lines. E.g.
by putting ``class_no_optimize_weights=" 02 06 "`` all the lines that
belong to the class ``02`` and ``06`` will be excluded from
optimization.
