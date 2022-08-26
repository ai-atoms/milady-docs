
.. _`sec:kernel`:

Kernels
=================



Kernel regression is activated when ``MILADY`` is executed in the mode ``ml_type=1``.
The generation of a kernel potential is made in two steps as it is described
in :ref:`Examples<ex:kernel-poly>` : (i) firstly, using ``ml_type=-2`` mode with an
appropriate algorithm we choose the sparse points that define the kernel and (ii)
the parametrization of the kernel using the mode ``ml_type=1``. Here we will note the options for the
first step as :math:`k_1`, whilst for the second :math:`k_2`.

Kernels definitions
^^^^^^^^^^^^^^^^^^^

.. option::  kernel_type (integer),

   :math:`k_2` option.

   -  ``kernel_type = 1`` Square-exponential kernel

      .. math::
         \tilde{k}(\mathbf{D}^{s,a}, \mathbf{x}^m)  =  \sigma_{SE}^2 \exp{-\frac{|\mathbf{D}^{s,a} - \mathbf{x}^m |^2}{2l_{SE}^2}}
         :label: kSE       

      the values to define are :math:`\sigma_{SE}` and :math:`l_{SE}`.

   -  ``kernel_type = 4`` Polynomial kernel

      .. math::
         \tilde{k}(\mathbf{D}^{s,a}, \mathbf{x}^m)  =  \left(\sigma_{SE}^2 + \frac{\mathbf{D}^{s,a}\mathbf{x}^m }{2l_{SE}^2}  \right)^p
         :label: kPO

      the values to define are :math:`\sigma_{SE}`, :math:`l_{SE}` and
      :math:`p`.


   -  ``kernel_type = 6`` Mahalanobis - Batchattarya kernel

      .. math::
         \tilde{k}(\mathbf{D}^{s,a}, \mathbf{D}^m)  =  \left[ \left( \mathbf{D}^{s,a} - \mathbf{x}^m \right)^\top  \Sigma^{-1} \left(  \mathbf{D}^{s,a} - \mathbf{x}^m \right) \right]^p
         :label: kMAHA

      :math:`p` should be defined. For the case :math:`p=1/2` there is
      Mahalanobis distance.

   -  ``kernel_type = 7`` Square-exponential kernel for which the covariance matrix is sampled randomly on
      some linear basis. The only parameter to define is ``sigma_kernel``
      ( typical value is ``sigma_kernel = 0.05`` but try more values to be sure that it is adapted for
      your descriptor).

   -  ``kernel_type = 44`` Polynomial kernel for which the covariance matrix is sampled randomly on
      some linear basis. The only parameter to define is ``kernel_power``. Usually ``kernel_power=4`` it is a
      resonable value (at least on what we have tested, such as, Fe, W, some HEA and aspirin)

   | Defalut ``kernel_type = 4``

.. option::  length_kernel (real)

   :math:`k_2` option. It defines
   :math:`l_{SE}` from Eqs. :math:numref:`kSE` and :math:numref:`kPO`.

   Default ``length_kernel = 0.05d0``

.. option::  sigma_kernel (real)

   :math:`k_2` option. It defines
   :math:`\sigma_{SE}` from from Eqs. :math:numref:`kSE` and :math:numref:`kPO`. 
   In ``Milady`` for polynomial kernel is optimal 0.d0. 

   Default ``sigma_kernel = 0.d0``

   .. warning::

     Pay attetion that ``sigma_kernel = 0.d0`` for square-exponential kernel has no sense !!!

.. option::  kernel_power (real)

   :math:`k_2` option. It defines :math:`p`
   from Eqs. :math:numref:`kMAHA`. The recommended values are 3, 1
   and 1/2, respectively.

   Default ``kernel_power = 2.d0``

Selections of kernel sparse points
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 

In ``Milady`` the selection of sparse points (``ml_type=-2`` and ``write_krnel_matrix=.true.``) 
is driven by our intuition based on physics considerations 
that some parts of the database are more important than the others. 
For example if we are interested in having nice elastic constants we will make a 
special treatment for the database classes that contain elastic deformations.  
Consequently, from the complete ``database`` we select some classes that we 
will name as ``database_reference``. Beyond the algorithm of sparse points selection 
(defined by ``kernel_dump``) we bias the selection by the number of points to be selected 
from ``database`` and ``database_reference`` i.e. ``np_kernel_full`` and ``np_kernel_ref``, 
respectively.  
The selection of classes that encompass ``database_reference`` is given by the character 
variable ``classes_for_mcd`` (the name is weird because it corresponds sometimes to the most 
“smooth” classes without outliers such as molecular dynamics for perfect bulk configuration, 
elastic deformations etc). Finally the kernel is written 

.. option::  write_kernel_matrix (logical)

   :math:`k_1` option. Writes or not the kernel if it is ``.true.`` or ``.false.``, respectively. 
   The kernel is written in the file ``kernel_matrix.dat``, which has the shape
   ``number_of_data_kernel+1`` :math:`\times` ``dim_desc + 4``. 
   The ASCII file ``kernel_matrix.dat`` has the following structure:

   .. code-block::

      2314 59
      1    a1 a2 ... aD   43  27  07_111_000003
      2    b1 b2 ... bD  234  12  09_111_000010
      .     .  .      .   .   .       .
      .     .  .      .   .   .       .
      .     .  .      .   .   .       .
      2314 c1 c2 ... cD  10  127  11_111_000023

   The first line gives the number of kernel sparse points (2314 in this example) and the 
   number of columns for
   each sparse point (59).
   Each following lines (again, 2314) contains in first position the id of the sparse point, 
   then followed by ``D`` real values  with the ``D`` components of the descriptor and finally 
   there are three labels that identify the origin of that sparse point: an internal id used for 
   ``Milady``, which identify the system,
   the id of atom in that system and the human readable name of the system similar to ``poscar`` 
   name file described in :ref:`Database file names<sec:dbnames>`.  In above example for 
   sparse point ``1`` is part of system  ``43`` and i correspond to atom number ``27`` 
   from the file ``07_111_000003.poscar``.
       

   Default ``.false.``

.. option:: kernel_dump (integer)

   :math:`k_1` option. Algorithm used for the selection of the
   sparse points.

   -  ``kernel_dump=1`` normalized selection of sparse points using MCD/Mahalanobis distances. There are 4 parameters to set: 
      ``power_mcd``,  ``np_kernel_ref``, ``np_kernel_full`` and reference classes given by
      ``classes_for_mcd``. Is what we advice to use. More details in the paper A. Zhong et al. 2022 
      (refered as normalized MCD/Mahalanobis sparse points selection)

   -  ``kernel_dump=2`` draft selection of sparse points using MCD/Mahalanobis distances. There are 4 parameters to set: 
      ``power_mcd``,  ``np_kernel_ref``, ``np_kernel_full`` and reference classes given by
      ``classes_for_mcd``.   More details in the paper A. Zhong et al. 2022 
      (refered as MCD/Mahalanobis sparse points selection)

   -  ``kernel_dump=3`` selection based on CUR decomposition. *REF Mahoney* .  There are three 
      parameters that should be set: ``np_kernel_ref``, ``np_kernel_full``
      as well as the reference classes given by ``classes_for_mcd``. For advanced applications 
      there are others options for CUR descoposition, such as: ``cur_kval``, 
      ``cur_rval`` and ``cur_eps``. However, the selection of sparse points is not very sensible to these 
      last 3 parameters.   

.. option::  classes_for_mcd (character)

   :math:`k_1` option. It defines the classes that define the ``database_reference``. FFor examples 
   ``classes_for_mcd="10 11"`` defines the collections of all the atomic environements from the 
   classes ``10`` and ``11``. Moreover, for the case ``kernel_dump=1`` or ``kernel_dump=2`` 
   the atomic configurations,  which  belong to these classes, are used to build the 
   sample covariance matrix used to compute MCD/Mahalanobis distance.   

   Default ``classes_for_mcd= " 01 "``

.. option::  np_kernel_ref (integer)

   :math:`k_1` option. Number of sparse points
   selected from the ``database_reference`` (defined by the atomic environements specified by 
   ``classes_for_mcd``). However, depending on the selection algorithm the selected sparse points 
   can be lower or can have a small noise around the mediam value. 

   Default ``np_kernel_ref= 200``

.. option::  np_kernel_full (integer)

   :math:`k_1` option. Number of points selected from the whole database. However,
   depending on the selection algorithm the final number of selected points can be lower or larger 
   (but not very different).

   Default ``np_kernel_full= 800``

.. option::  power_mcd (real)

   :math:`k_1` option. Defines the power of MCD / Mahalanobis statistical distance on which the 
   selection grid od sparse points is made. More details in A. Zhong et al. 2022. If you do not 
   know what to do ... leave the default value.    

   Default ``power_mcd = 0.05d0``

.. option::  cur_kval (integer)

   :math:`k_1` option. Defines the order of SVD decomposition of the atomic desing matrix in order to perform 
   the leverage column score as was introduced by **REF Mahoney**. it cannot be larger than the rank(atomic desing matrix)
   or the number of columns and rows of atomic design matrix. If it is given a  negative value then 
   the optimal value i.e. the rank(atomic desing matrix) is used.   

   Default ``cur_kval = -1``

.. option::  cur_rval (integer)

   :math:`k_1` option. Defines the number of rows selection in CUR decomposition as it was introduced by  
   **REF Mahoney**. If you are not sure about your choice, choose the default value i.e. -1.    

   Default ``cur_rval = -1``   

.. option::  cur_eps (real)

   :math:`k_1` option. Defines the error of sampling in CUR decomposition as it was introduced by  
   **REF Mahoney**. If you are nor sure about your choise, choose the default value  i.e. 1.   

   Default ``cur_eps = 1.d0`` 





