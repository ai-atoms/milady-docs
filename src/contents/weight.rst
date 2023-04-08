
.. _`sec:hyper`:

Optimization of hyperparameters
===============================

.. warning::

  This option is not fully tested.  In case of weird results, you can share your experience and report an issue.

The weights of the various components in the database can be optimized using a **genetic algorithm** through the following objective function:

.. math::
   J(\mathbf{w}) = f_e \textrm{MAE}_e (\mathbf{w})+ f_f \textrm{MAE}_f (\mathbf{w})+ f_s \textrm{MAE}_s(\mathbf{w})
   :label: ga_opt

MAE is the mean average error for energy, force, or stress, and :math:`f` is the multiplicative factor for each of them. 
These multiplicative factors are provided by the user (see below in this section). 
The optimization of database weights is activated through the
``optimize_weights_db=.true.``. While the weights of chemical channels can be optimized by activation of the flag 
``optimize_weights_chem=.true.``. Only one of them can be true, no crossed optimization for this ``Milady`` version. 
The evolution of the objective function is monitorized in the file ``optimization_error.dat`` with the first column indicates 
the call number, second: the objective function, third: :math:`MAE_e`, fourth: :math:`MAE_f` and fifth:  :math:`MAE_s`. 
At the end, the best set of parameters which corresponds to the best optimization, with a minimum of the objective 
function, is given as output. 

.. option::  optimize_weights_db (logical)

   You can activate or deactivate the optimization of weights :math:`w_E`, :math:`w_F`, and :math:`w_S` 
   through a genetic algorithm. The initial and final values of these weights are indicated in 
   the ``db_file`` (usually named ``db_model.in``). 
   For more information, please refer to the section on  :ref:`Database files<sec:db-model>`. 
   The :math:`l^{th}` line of ``db_model.in`` introduces three weights that will be 
   optimized: :math:`w^l_e`, :math:`w^l_f`, and :math:`w^l_s`, which stand for the weights for energy, 
   force, and stress, respectively. The maximum number of weights 
   (the number of arguments of the genetic algorithm function) is equal to the number of lines 
   in the DB file, ``db_model.in``, multiplied by three. 
   However, this number can be lower if you use the option ``class_no_optimize_weights`` to exclude some lines. 
   For example, if you put ``class_no_optimize_weights=" 02 06 "``, all the lines that 
   belong to the classes ``02`` and ``06`` will be excluded from optimization.
   
   Default ``optimize_weights_db=.false.``


.. option::  optimize_weights_chem (logical)

   Activate or not the optimization of the weights (or colors) of atoms in each channel through 
   genetical algorithm. The initial and final values of those weights are those selectioned in ``ml`` file. 
   How to activate or not the multi-channel descriptors for multiple elements databases can be found in 
   :ref:`Atomic systems<sec:atomicsys>`. The result of the optimization can be found at screen of in the file 
   ``optimization_chemical.info``. 
   
   Default ``optimize_weights_chem=.false.``

.. warning:: 

  This options  ``optimize_weights_db`` and ``optimize_weights_chem`` cannot be true simultaneously. 


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

.. option::  max_iter_optimize_weights (integer) 
   
   The maximum number of optimization steps. The total number of optimization steps are 
   given by: ``optimize_ga_puplation`` :math:`\times` ``max_iter_optimize_weights``
   
   Default: ``max_iter_optimize_weights=40``

.. option::  factor_energy_error (real) 

   The factor for energy in the
   objective function :math:`f_e` in the
   Eq. :math:numref:`ga_opt`.
   
   Default: ``force_energy_error=1.d0``

.. option::  factor_force_error (real) 

   The factor for force in the
   objective function :math:`f_f` in the
   Eq. :math:numref:`ga_opt`.

   Default: ``force_force_error=1.d0``

.. option::  factor_stress_error (real) 
   
   The factor for energy in the
   objective function :math:`f_s` in the
   Eq. :math:numref:`ga_opt`.
   
   Default: ``force_stress_error=1.d0``


.. option::  optimize_weights_L1 (logical) 

   The regularization is performed
   by adding a :math:`L^1` function on the objective function from
   Eq. :math:numref:`ga_opt` The weigths are optimized in the
   same time as the ``lambda_krr`` regularizitation parameter. The new
   objective function becomes:

   .. math:: J(\mathbf{w}) = J(\mathbf{w}) + \lambda_{krr} \sum_k \left|  w_k \right|
   
   Default ``optimize_weights_L1=.false.``

.. option::  optimize_weights_L2 (logical) 

   The regularization is performed
   by adding a :math:`L^2` function on the objective function from
   Eq. :math:numref:`ga_opt`. The weigths are optimized in the
   same time as the ``lambda_krr`` regularizitation parameter. The new
   objective function becomes:

   .. math:: J(\mathbf{w}) = J(\mathbf{w}) + \lambda_{krr} \sum_k \left|  w_k \right|^2

   Default ``optimize_weights_L1=.false.``

.. option::  optimize_weights_Le (logical) 

   The regularization is performed
   by adding a :math:`L^2` + :math:`L^1` function on the objective
   function from Eq. :math:numref:`ga_opt`. The weigths are
   optimized in the same time as the ``lambda_krr`` regularizitation
   parameter. The new objective function becomes:

   .. math:: J(\mathbf{w}) = J(\mathbf{w}) + \lambda_{krr} \sum_k \left|  w_k \right|^2 + \lambda_{krr} \sum_k \left|  w_k \right|
   
   Default ``optimize_weights_Le=.false.``



