
.. _`sec:kernel`:

Kernels
=================



The kernels are active if milady is run in kernel mode i.e.
``ml_type=1``. The generation of a kernel potential needs a two steps
process as it is described in Appendix. **REF**: (i) firstly, using an
appropriate algorithm we choose the points that define the kernel and (ii)
the parametrization of the kernel. Here we will note the options for the
first step as :math:`k_1` whilst for the second :math:`k_2`.

.. option::  kernel_type (integer),

   :math:`k_2` option.

   -  ``kernel_type = 1`` Square-exponential kernel

      .. math::

         \tilde{k}(\mathbf{D}^{s,a}, \mathbf{x}^m)  =  \sigma_{SE}^2 \exp{-\frac{|\mathbf{D}^{s,a} - \mathbf{x}^m |^2}{2l_{SE}^2}}
                \label{kernel:se}

      the values to define are :math:`\sigma_{SE}` and :math:`l_{SE}`.

   -  ``kernel_type = 4`` Polynomial kernel

      .. math::

         \tilde{k}(\mathbf{D}^{s,a}, \mathbf{x}^m)  =  \left(\sigma_{SE}^2 + \frac{\mathbf{D}^{s,a}\mathbf{x}^m }{2l_{SE}^2}  \right)^p
             \label{kernel:po}

      the values to define are :math:`\sigma_{SE}`, :math:`l_{SE}` and
      :math:`p`.


   -  ``kernel_type = 6`` Mahalanobis - Batchattarya kernel

      .. math::

         \tilde{k}(\mathbf{D}^{s,a}, \mathbf{D}^m)  =  \left[ \left( \mathbf{D}^{s,a} - \mathbf{x}^m \right)^\top  \Sigma^{-1} \left(  \mathbf{D}^{s,a} - \mathbf{x}^m \right) \right]^p
                \label{kernel:maha}

      :math:`p` should be defined. For the case :math:`p=1/2` there is
      Mahalanobis distance.

   -  ``kernel_type = 7`` Square-exponential kernel for which the covariance matrix is sampled randomly on
      some linear basis. The only parameter to define is ``sigma_kernel``
      ( typical value is `` sigma_kernel = 0.05`` but try more values to be sure that it is adapted for
      your descriptor).

   -  ``kernel_type = 44`` Polynomial kernel for which the covariance matrix is sampled randomly on
      some linear basis. The only parameter to define is ``kernel_power``. Usually ``kernel_power=4`` it is a
      resonable value (at least on what we have tested, such as, Fe, W, some HEA and aspirin)

   |
   | Defalut ``kernel_type = 4``

.. option::  length_kernel (real)

   :math:`k_2` option. It defines
   :math:`l_{SE}` from Eqs. `[kernel:se] <#kernel:se>`__ and
   `[kernel:po] <#kernel:po>`__.

   Default ``length_kernel = 1.d0``

.. option::  sigma_kernel (real)

   :math:`k_2` option. It defines
   :math:`\sigma_{SE}` from Eqs. `[kernel:se] <#kernel:se>`__ and
   `[kernel:po] <#kernel:po>`__.

   Default ``sigma_kernel = 1.d0``

.. option::  kernel_power (real)

   :math:`k_2` option. It defines :math:`p`
   from Eqs. `[kernel:po] <#kernel:po>`__,
   `[kernel:dist] <#kernel:dist>`__ and
   `[kernel:maha] <#kernel:maha>`__. The recommended values are 3, 1
   and 1/2, respectively.

   Default ``kernel_power = 2.d0``

-  *kernel_dump*:``integer``

   :math:`k_1` option. Selection of the
   kernel from the database using various algorithms.

   -  ``kernel_dump=1`` dump by draft classes. For this option it should
      be set ``classes_for_kernel``

   -  ``kernel_dump=2`` dump by MCD classes / distances NOT YET FULLY
      ACTIVE

   -  ``kernel_dump=3`` dump using Mahalanobis distance. There are few
      parameters that should be set: ``power_mcd``, ``np_kernel_ref``
      and ``np_kernel_full`` and reference classes given by
      ``classes_for_mcd``.

.. option::  classes_for_kernel (character)

   :math:`k_1` option. It defines
   the classes that define the kernel e.g.
   ``classes_for_kernel="10 11"`` defines all the atomic environements
   from the classes 10 and 11 as the kernel.

   Default ``classes_for_kernel= " 01 "``

.. option::  np_kernel_full (integer)

   :math:`k_1` option. Number of points
   selected from the whole databse, except the reference. However,
   depending on the selection algorithm the final number of selected
   points can be lower that the initial value.

   Default ``np_kernel_full= 400``

.. option::  np_kernel_ref (integer)

   :math:`k_1` option. Number of points
   selected from the reference. However, depending on the selection
   algorithm the number of final points can be lower.

   Default ``np_kernel_ref= 800``

.. option::  write_kernel_matrix (logical)

   Writes or not a parameters from
   kernel that will be used for subsequent calculations. It is written
   in the file ``kernel_matrix.dat`` than has the shape
   ``number_of_data_kernel`` :math:`\times` ``dim_desc`` + 3 TO BE
   COMPLETED ONCE PROGRAMMED.

   Default ``.false.``
