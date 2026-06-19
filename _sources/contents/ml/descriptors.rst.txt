
.. _`sec:descriptors`:

Descriptors
===================

.. option::  r_cut (real)

   The cut-off of the descriptor (in Å).

   Default ``r_cut=5.0``

.. option::  desc_forces (logical)

   Compute or not the force descriptors.
   Also the writting of the force descriptors is desactivated. Active
   for all descriptors. In the case ``desc_forces=.false.`` only the
   positions are read.

   Default ``desc_forces=.true.``

.. option::  descriptor_type (integer)

   Type of descriptor to be used.

   #. ``descriptor_type=1`` G2

   #. ``descriptor_type=2`` G3

   #. ``descriptor_type=3`` Behler

   #. ``descriptor_type=4`` Angular Fourier Series (AFS)

   #. ``descriptor_type=6`` Power Spectrum SO3

   #. ``descriptor_type=8`` Power Spectrum SO4

   #. ``descriptor_type=9`` Bispectrum SO4

   #. ``descriptor_type=14`` hybrid G2 + AFS

   #. ``descriptor_type=18`` hybrid G2 + Power Spectrum SO4

   #. ``descriptor_type=19`` hybrid G2 + Bispectrum SO4

   #. ``descriptor_type=77`` MiLaDy native descriptor

   #. ``descriptor_type=100`` MTP\ :math:`^3` (up to order
      :math:`M_{\mu,\nu}`, with :math:`\nu \le 3`)

   #. ``descriptor_type=200`` PiP permutationally invariant polynomials (N-body)

   #. ``descriptor_type=202`` Fourier N-body (ftnbody)

   #. ``descriptor_type=204`` Zeta-body (real-space 2-body / 3-body)

   #. ``descriptor_type=300`` ACE (atomic cluster expansion)

   #. ``descriptor_type=603`` Power Spectrum SO3 (3-body variant)

   .. note::
      The legacy SOAP (former ``descriptor_type=5``) and Bispectrum SO3
      (former ``descriptor_type=7``) descriptors are **no longer available**
      in this version of ``MILADY``.

   Default ``1``.

G2
----

To use G2, set ``descriptor_type=1``.

Parameters
""""""""""

.. option::  eta_max_g2 (integer)

   The max value of :math:`\eta`. The grid will be taken between :math:`10^{-2}` and this value.

   Default ``eta_max_g2=0.8``

.. option::  n_g2_eta  (integer)

   The grid for :math:`\eta` with the following generatig formulae:

   .. math:: \eta_p = 10^{-2} + \frac{p-1}{\textrm{n_g2_eta}}( \textrm{eta_max_g2}- 10^{-2})

   where :math:`p` range strats to 1 up to ``n_g2_eta``.

   Default ``3``

.. option::  n_g2_rs  (integer)

   The grid for :math:`r_s` with the following generating formulae:

   .. math:: r_s^p = p-1

   where :math:`p` range starts to 1 up to ``n_g2_rs``.

   Default ``1``



G3
----


To use G3, set ``descriptor_type=2``.

Parameters
""""""""""

.. option::  n_g3_eta (integer)

   The grid for :math:`\eta` with the following generatig formulae:

   .. math:: \eta_p = 10^{-2} + \frac{p-1}{\textrm{n_g2_eta}}(1 - 10^{-2})

   where :math:`p` range strats to 1 up to ``n_g2_eta``.

   Default ``3``

.. option::  n_g3_lambda (integer)

   the grid for :math:`\lambda` with the following generating formulae:

   .. math:: \lambda_p = -1 + 2(p-1)

   where :math:`p` range starts to 1 up to ``n_g3_lambda``. Is
   highly recommended the value ``n_g3_lambda``\ :math:`=2` i. e.
   :math:`\lambda` will have the value :math:`1` and :math:`-1`.

   Default ``2``

.. option::  n_g3_zeta (integer)

   The grid for :math:`\zeta` with the following generating formulae:

   .. math:: \zeta_p = 2^{p-1}

   where :math:`p` range starts to 1 up to ``n_g3_zeta``.

   Default ``2``

Behler
------

To use Behler, set ``descriptor_type=3``.

Parameters
""""""""""


The parameters of the descriptors are controlled by the options of the case :math:`G2` and :math:`G3`. Additional options are available:

.. option::  strict_behler (logical)

   All the parameters are set-up
   automatically following one of the Behler’s paper.

   Default ``F``

AFS
---

To use  AFS, set ``descriptor_type=4``.

Parameters
""""""""""

The parameters of the descriptors are controlled by the options of the number of radial
channels and Tchbychev polynomials. There are two types of AFS
descriptors introduced by the option ``afs_type``.

.. option:: afs_type (integer)

-  ``afs_type=1``: ``integer`` this option activates the orginal AFS
   published in the PRB paper `\cite{bartok2013}`:

   .. math:: \textrm{AFS}_{n,l}^j = \sum_{i,k} g_n(r_{ji}) g_n(r_{jk}) T_l (\cos{\theta_{ijk}})

   and has the dimension equal to ``n_rbf`` :math:`\times`
   ``(n_cheb + 1)``. The :math:`g_n` and :math:`T_l` are the radial
   channels and Tchebychev polynomials, respectivelly.

-  ``afs_type=2``: ``integer`` this option activates a new AFS
   descriptor with strong coupling between the radial channels:

   .. math:: \textrm{AFS}_{n,n^\prime, l}^j = \sum_{i,k} g_n(r_{ji}) g_{n^{\prime}}(r_{jk}) T_l (\cos{\theta_{ijk}})

   The dimension of this descriptor is equal to ``n_rbf``\ :math:`^2`
   :math:`\times` ``(n_cheb + 1)``.

   Default ``afs_type = 1``

.. option::  n_rbf (integer)

   The number of radial channels.

   Default ``n_rbf=4``

.. option::  n_cheb (integer)

   The number of Tchebychev polynomials.

   Default ``n_cheb=5``


Power Spectrum SO3
------------------

To use  power spectrum SO3, set ``descriptor_type=6``.


Parameters
""""""""""

The parameters of this descriptor are controlled by the
number of radial functions, ``n_rbf``, and the angular momentum of spherical harmonics ``l_max``.
This descriptor has two radial function choices given by ``radial_pow_so3`` flag.
The
dimension of the descriptor will be: ``n_rbf`` :math:`\times`
``(l_max + 1)`` if ``radial_pow_so3 = 1`` and ``n_rbf + 1`` :math:`\times`
``(l_max + 1)`` if ``radial_pow_so3 = 2``

.. option:: radial_pow_so3 (integer)

   The type of radial function. ``radial_pow_so3 = 1`` is the default choice and give the original polynomial radial basis
   (the same as the default basis of AFS descritor) whilst ``radial_pow_so3 = 2`` gives the radial basis based on Chebyshev polynomials
   described in refXXX. This option is common and acitve for others two descriptors: Power Spectrum SO3-3body and Bispectrum SO3 descriptors.

   Default ``radial_pow_so3 = 1``

.. option::  n_rbf (integer)

   The number of Gaussian (radial) functions.

   Default ``n_rbf=4``

.. option::  l_max (integer)

   The max values of the angular moment.

   Default ``l_max=4``

The :math:`n_{rbf} \times (1 + l_{\textrm{max}})` or :math:`(n_{rbf} + 1) \times (1 + l_{\textrm{max}})` components of the power
spectrum SO(3) descriptor of the :math:`j^{th}` atom is written:

.. math::

   p_{nl}^j = \sum_{m=-l_{\textrm{max}}}^{l_{\textrm{max}}} c_{nlm}^{j*}c_{nlm}^j
            \nonumber

with :math:`n` in the range :math:`0/1` to :math:`n_{rbf}`, whilst
:math:`l = 0, \ldots l_{max}`. The Wigner coefficients can be
written:

.. math::

   c_{nlm}^j = w_j g_n(r=0) Y_{lm}(x,y,z \equiv \mathbf{0}) + \sum_{i \in v(j)} w_i g_n(r_{ij}) \cdotp Y_{lm}(x,y,z \equiv \mathbf{r}_{ij})
            \nonumber

the functions :math:`g_n(r_{ij})` are polynomial basis functions (the same as the radial function on which AFS is built) or
Chebyshev polynomials from refXXX.
:math:`Y_{lm}` is the spherical function in the Cartesian form.


Power Spectrum SO3 3body
------------------------

To use  power spectrum SO3 3body, set ``descriptor_type=603``. This descriptor follows the ideea
of 3 body descriptor proposed by refXXXdeGironcoli.


Parameters
""""""""""

The parameters of this descriptor are controlled by the
number of radial functions, ``n_rbf``, and the angular momentum of spherical harmonics ``l_max``.
This descriptor has two radial function choices given by ``radial_pow_so3`` flag.
The dimension of the descriptor will be: :math:`n_{\textrm{rbf}}^2 \times (l_{\textrm{max}})`
if ``radial_pow_so3 = 1`` or  :math:`(1 + n_{\textrm{rbf}})^2  \times (l_{\textrm{max}})`
if ``radial_pow_so3 = 2``

.. option:: radial_pow_so3 (integer)

   The same utility as described before for Power Spectrum SO3 descriptor.

   Default ``radial_pow_so3 = 1``

.. option::  n_rbf (integer)

   The same utility as described before for Power Spectrum SO3 descriptor.

   Default ``n_rbf=4``

.. option::  l_max (integer)

   The max values of the angular moment.

   Default ``l_max=4``

The :math:`n_{rbf}^2 \times (1 + l_{\textrm{max}})` or :math:`(n_{rbf} + 1)^2 \times (1 + l_{\textrm{max}})` components of the power
spectrum SO(3) 3 body descriptor of the :math:`j^{th}` atom is written:

.. math::

   p_{n_1 n_2 l}^j = \sum_{m=-l_{\textrm{max}}}^{l_{\textrm{max}}} c_{n_1 l -m}^{j*}c_{n_2 lm}^j
            \nonumber

with :math:`n_{1,é}` are in the range of :math:`0/1` to :math:`n_{rbf}`, whilst
:math:`l = 0, \ldots l_{max}`. The Wigner coefficients are the same described for Power Spectrum SO3.


Power Spectrum SO4
------------------

To use power spectrum SO4, set ``descriptor_type=8``.

Parameters
""""""""""

The parameters of this descriptor are controlled by the maximum angular
moment :math:`j_{max}`. Its dimension is :math:`2 j_{max} + 1`. The same
two options as for the **Bispectrum SO4** descriptor (below),
``j_max`` and ``inv_r0_input``, are used.

.. option::  j_max (real)

   The maximum component of the spectral function.

   Default ``j_max=1.5``

.. option::  inv_r0_input (real)

   The value of the maximum projection at the north pole in :math:`\pi`
   units (see Bispectrum SO4 for details).

   Default ``inv_r0_input=`` ``1.d0 - 0.02/``\ :math:`\pi`


Bispectrum SO4
--------------

To use bispectrum SO4, set ``descriptor_type=9``.

Parameters
""""""""""


The parameters of the descriptors are controlled by maximum angular moment :math:`j_{max}`.
The dimension is not easy to guess. Moreover, it depends on the
choice on diagonal (:math:`j_1=j_2`) or full the complete set of
:math:`j_1, j_2`.

.. option::  j_max (integer)

   The maximum componenet of the spectral
   function.

   Default ``j_max=1.5``

.. option::  inv_r0_input (real)

   The value of the maximum projection
   at north pole in :math:`\pi` units. The final value that will be
   used in code will be multiplied by :math:`\pi`. The value should
   be slightly lower that 1 but strictly positive. The default
   value is suggested by the brilliant paper of Bartok et al. If
   you do not have ideea about the :math:`SO(4)` theory, trust the
   default value.

   Default ``inv_r0_input=`` ``1.d0 - 0.02/``\ :math:`\pi`

.. option::  lbso4_diag (logical)

   If ``.true.`` only the diagonal
   components are selected (as in GAP). If ``.false.`` is SNAP-like
   way and all the components are selected. It should be notted
   that the bi-spectrum is overcomplete descriptor and only
   diagonal components are mathematically justified. However, in
   the original SNAP potential of Thompsson is was used in full
   version.

   Default ``lbso4_diag=.false.``


MTP
---

To use MTP, set ``descriptor_type=100``.


Parameters
""""""""""


The parameters of the descriptors are controlled by minimum and the maximum degree of the
polynomials ``mtp_poly_min`` and ``mtp_poly_max``. The degree of the
generating radial function will be the internal parameter
``mtp_rad_order =mtp_poly_max - mtp_poly_min +1``. The dimension of
the descriptor i.e. number of basis function is given by
``mtp_dim=mtp_rad_order + 2*mtp_rad_order**2 + mtp_rad_order**3``.

.. option::  mtp_poly_min (integer)

   The minimum degree of the radial function

   Default ``mtp_poly_min=2``

.. option::  mtp_poly_max (integer)

   The minimum degree of the radial function

   Default ``mtp_poly_max=4``

.. option:: lambda_krr (real)

   The regularization using :math:`L^2` or
   :math:`L^1` norm. It is active only for cases ``mld_fit_type=0``
   (for a fixed positive value of ``lambda_krr`` and
   ``mld_fit_type=10`` (for a grid). For details see the correspoding
   documentation. For negative values this option is skipped and
   standard fit is performed.

   Default ``lambda_krr=-1.d0``


PiP
----

To use PiP (permutationally invariant polynomials), set ``descriptor_type=200``.

.. note::
  The current implementation of PiP treat only one single type of atoms 


Parameters
""""""""""


This descriptors is based by a cluster expansion of the system energy:


.. math:: 

  E = \sum_i V_1 (r_i)  + \frac{1}{2} \sum_{i,j} V_2(r_{i}, r_{j}) +  \frac{1}{3!} \sum_{i,j,k}   V_3(r_{i}, r_{j}, r_{k} ) + \ldots 


The total energy is expressed as a sum of one-atom :math:`V_1` , 
pair :math:`V_2`, threeatom (angle) :math:`V_3`  terms, and so forth. The order of expansion, or even a 
combination of expantion terms are driven by ``l_body_order``. This version of ``Milady`` enables a developement 
up to the fourth order.  The number of PiP terms for each term are driven by ``body_D_max``, 
``bond_dist_transform``, ``bond_beta`` and ``bond_dist_ann``. 

.. option:: l_body_order (logical vector)

   This logical vertor of dimention 4 design the order of cluster expension. For example
   ``l_body_order(2)=.true.``, ``l_body_order(3)=.true.``, ``l_body_order(4)=.false.`` 
   enable a cluster expension up to the third order. 

   Default ``l_body_order(:)=.true.``

.. option:: body_D_max (integer vector)

   This integer vector fix the number of PiP terms for each term of expansion. 
   ``body_D_max(2)`` for :math:`V_2`, ``body_D_max(3)`` for :math:`V_3` and 
   ``body_D_max(4)`` for :math:`V_4`. A reasonable choice can be 20, 9, 7. Try more less 
   depending on th design that you made for your expension. 

   Default   ``body_D_max(i)=i``

.. option:: bond_dist_transform (integer)

   TODO: choose 3

   Default: ``bond_dist_transform=3``

.. option:: bond_beta (real) 

   TODO:  choose 2.0

   Default: ``bond_beta=2.0``

.. option::   bond_dist_ann

   TODO: choose   bond_dist_ann=1.0

   Default: ``bond_dist_ann=1.0``


ACE
----

To use ACE (atomic cluster expansion), set ``descriptor_type=300``.


Parameters
""""""""""


This descriptor is based on a hierarchy of many-body basis functions.

.. .. math::

..    \epsilon_a (\mathbf{R}_a) = \sum_{\nu} \mathbf{w}_{\mathbf{u}^{(\nu)}}^\top \sum_{\mathbf{m} = -\mathbf{l}_b}^{\mathbf{l}_b} c_{\mathbf{m}}^{\mathbf{l}_b \mathbf{L}_b} \mathbf{A}_{a, \mathbf{v}}^{(\nu)}(\mathbf{R}_a)

The energy descriptor of an atom :math:`a` is:

.. math::

   \mathbf{D}_{a} = \bigoplus_{\nu} \left( \bigoplus_{\mathbf{u}^{(\nu)}} \sum_{\mathbf{m} = -\mathbf{l}}^{\mathbf{l}} c_{\mathbf{m}}^{\mathbf{l} \mathbf{L}} \mathbf{A}_{a, \mathbf{v}}^{(\nu)}(\mathbf{R}_a)
 \right)
   = \bigoplus_{\nu} \mathbf{D}_{a,\mathbf{u}^{(\nu)}}^{(\nu)}


The total energy is expressed as a sum of the :math:`\nu`-body order terms, where :math:`\nu` is the number of atoms in the cluster. 
The index :math:`\mathbf{u}` indicates a collection of indices :math:`\mathbf{\mu n l L}` that define the basis functions, 
where each of them is a vector of :math:`\nu` elements: 
:math:`\mathbf{\mu}` is the chemical species, :math:`\mathbf{n}` is the index of the radial function, :math:`\mathbf{l}` is the angular momentum, and :math:`\mathbf{L}` is the order of coupling. 
The coefficients :math:`c_{\mathbf{m}}^{\mathbf{l} \mathbf{L}}` are the Clebsch-Gordan coefficients that couple the spherical harmonics. 
The :math:`\mathbf{A}_{a, \mathbf{v}}^{(\nu)}(\mathbf{R}_a)` are the atomic basis functions, which are products of one-atom basis functions :math:`A_{a,\mu n l m}(\mathbf{R}_a)`:  

.. math::

   A_{a,\mu n l m}(\mathbf{R}_a) =
   \sum_{j \in \mathcal{N}(a)} \delta_{\mu}(\mu_j)
   R_{nl}^{\mu \mu_a}(r_{ja}) \, Y_{lm}(\hat{r}_{ja})

For the case of k-ACE with a drastic reduction of number of basis functions by tensor contraction, 
we define :math:`\mathbf{G}^{l,\mu_a,\mu_j}` a matrix composed of :math:`M` row vectors :math:`\mathbf{R}_{l}^{\mu_a \mu_j}(r_m)` at a
given sampled distance :math:`r_m (m=1,\ldots,M)`. Then :math:`\mathbf{k}` denotes the order of contraction,
i.e., the truncation order retained in the SVD of the matrix :math:`\mathbf{G}^{l,\mu_a,\mu_j}`.

The parameters of the descriptors are controlled by the options below.

.. option:: ace_numax (integer)

   The maximum body order set by the user. 

.. option:: ace_chem (integer)

   The way to encode chemical species.

   -  ``ace_chem=0``: incomplet version, treatement for single element systems.
   -  ``ace_chem=1``: full version, treatement for multi-element systems.

   Default ``ace_chem=1``

.. option:: ace_radial_chem (integer)

   The type of the radial part treatement.

   - ``ace_radial_chem=1``: Ralf version, classical ACE.
   - ``ace_radial_chem=3``: k-ACE version with tensor contraction.

   Default ``ace_radial_chem=1``

.. option:: ace_gencg (integer)

   The type of the generation of the Clebsch-Gordan coefficients.

   - ``ace_gencg=1``: redundant version.
   - ``ace_gencg=2``: SVD Dusson-Ortner version.

   Default ``ace_gencg=2``

.. option:: l_ace_order (logical vector)

   This logical vector defines which order(s) of cluster expension is activated. 
   For example, the setting

   ``l_body_order(1)=.true.``
   
   ``l_body_order(2)=.true.``
   
   ``l_body_order(3)=.true.``

   ``l_body_order(4)=.false.``
   
   ``l_body_order(5)=.false.``
    
   ``l_body_order(6)=.false.``

   enables a cluster expension up to the third order. 

.. option:: ace_nmax_list (string)

   A string of integer numbers that define the maximum value of :math:`\mathbf{n}` for each body order. 
   The length of this string should be at least equal to ``ace_numax``. 

   Example: ``ace_nmax_list = "14 5 4 3 2 1"`` 

.. option:: ace_lmax_list (string)

   A string of integer numbers that define the maximum value of :math:`\mathbf{l}` for each body order. 
   The length of this string should be at least equal to ``ace_numax``. 

   Example: ``ace_lmax_list = "0 4 3 2 1 1"``

.. option:: ace_kmax_list (string)

   A string of integer numbers that define the maximum value of :math:`\mathbf{k}` for each body order. 
   The length of this string should be at least equal to ``ace_numax``. 

   Example: ``ace_kmax_list="5 3 3 3 3 3"``

.. option:: ace_radial_poly (integer)

   The type of the polynomial in the radial part.

   1 - powPftouny; 2 - expPaftouny; 3 - simpBessel

   Default   ``ace_radial_poly=2``


Hybrid descriptors
------------------

``MILADY`` provides several *hybrid* descriptors that concatenate a radial
:math:`G2` part with an angular/many-body part. The resulting descriptor is the
direct sum of the two blocks, and its parameters are simply those of the two
parent descriptors:

- ``descriptor_type=14`` — hybrid **G2 + AFS** (parameters of the **G2** and **AFS** sections).
- ``descriptor_type=18`` — hybrid **G2 + Power Spectrum SO4** (parameters of the **G2** and **Power Spectrum SO4** sections).
- ``descriptor_type=19`` — hybrid **G2 + Bispectrum SO4** (parameters of the **G2** and **Bispectrum SO4** sections).


MiLaDy native descriptor
------------------------

To use the MiLaDy native descriptor, set ``descriptor_type=77``.

Parameters
""""""""""

.. option:: rmat_dim (integer)

   The linear size of the native descriptor matrix; the descriptor dimension is
   ``rmat_dim`` :math:`\times` ``rmat_dim``.

   Default ``rmat_dim=20``

.. option:: img_weighted (logical)

   Use a multi-channel (chemically weighted) variant of the descriptor.

   Default ``img_weighted=.false.``

.. option:: img_num_ch (integer)

   The number of channels used when ``img_weighted=.true.``.

   Default ``img_num_ch=1``


Fourier N-body (ftnbody)
------------------------

To use the Fourier N-body descriptor, set ``descriptor_type=202``.

Parameters
""""""""""

This descriptor expands the N-body interaction on a Fourier radial basis. The
active body orders are selected with ``l_body_order`` (a logical vector, see
the **PiP** section); the size, length and grid spacing of the Fourier basis are
provided per body order as strings.

.. option:: l_body_order (logical vector)

   Selects which body orders are activated (same convention as for the
   **PiP** descriptor).

.. option:: dim_fourier_nbody (string)

   The number of Fourier basis functions for each active body order.

.. option:: length_fourier_nbody (string)

   The length (range) of the Fourier basis for each active body order.

.. option:: delta_fourier_nbody (string)

   The grid spacing of the Fourier basis for each active body order.


Zeta-body
---------

To use the Zeta-body descriptor, set ``descriptor_type=204``. It provides an
explicit real-space **2-body / 3-body** description of the local environment.

.. note::
   Zeta-body uses body orders 2 and 3 only (``l_body_order(2)`` and
   ``l_body_order(3)``); the other body orders are turned off automatically.
   For the pure 2-body channel it is recommended to use ``active_k2b=.true.``
   instead.

Parameters
""""""""""

.. option:: zetabody_order (integer)

   The order of the zeta-body expansion. It must be strictly smaller than the
   internal limit ``MAX_ZETABODY_ORDER`` (= 6).

.. option:: r_cut_z2b (real)

   The cut-off radius (in Å) of the 2-body channel. If negative, the global
   ``r_cut`` is used.

   Default ``r_cut_z2b=r_cut``

.. option:: r_cut_z3b (real)

   The cut-off radius (in Å) of the 3-body channel. If negative, the global
   ``r_cut`` is used.

   Default ``r_cut_z3b=r_cut``

.. option:: r_cut_width_z2b (real)

   The width of the cut-off transition region of the 2-body channel. If
   negative, the global ``r_cut_width`` is used.

.. option:: r_cut_width_z3b (real)

   The width of the cut-off transition region of the 3-body channel. If
   negative, the global ``r_cut_width`` is used.

.. .. option:: ace_lambda_list (string)

..    A string of real numbers that define the value of :math:`\lambda` for each body order. 
..    The length of this string should be at least equal to ``ace_numax``.

..    Example: ``ace_lambda_list="3.0 3.0 3.0 3.0 3.0 3.0"``         
   

.. zetaace_order =      1
.. ! here is the body nu=1... 
.. dim_delta_zetaace(1) = " 1.d0 1.d0 1.d0 1.d0 1.d0 1.d0 "  
.. ! nu =2 
.. dim_delta_zetaace(2) = " 1.d0 1.0d0 1.0d0 1.0d0 1.d0 1.d0 "  
.. ! nu = 3 
.. dim_delta_zetaace(3) = " 1.d0 1.0d 1.0d0 1.0d0 1.d0 1.d0 "  
.. l_ace_set_rcut = .false. 
.. ace_rcut_in_list =" 1.2d0 1.2d0 1.2d0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
.. ace_rcut_width_in_list =" 0.4d0 0.4d0 0.4d0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
.. ace_rcut_out_list =" 5.d0 5.d0 5.d0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
.. ace_rcut_width_out_list =" 0.5d0 0.5d0 0.5d0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     



.. _`sec:low_distance`:

Low-distance behaviour: cutoffs, k2b and ZBL
--------------------------------------------

At short interatomic distances the many-body descriptors become unreliable, as
training sets rarely sample close encounters. ``MILADY`` controls this
*low-distance* regime with three ingredients that can be combined: the smooth
**cutoff functions** that bound the descriptor in distance, an explicit **k2b**
two-body channel that adds a learnable pair interaction, and the physics-based
**ZBL** repulsive core for very close encounters.

Cutoff functions
""""""""""""""""

Every descriptor is bounded by a smooth cutoff. The *outer* cutoff removes
interactions beyond ``r_cut``; an optional *inner* cutoff removes them below
``r_cut_in``.

.. option:: r_cut (real)

   The outer cutoff radius (Å). All interactions vanish for
   :math:`r > r_{\textrm{cut}}`. Mandatory.

.. option:: r_cut_width (real)

   The width (Å) of the smooth transition near the outer cutoff (used by
   ``type_fcut=3``).

.. option:: type_fcut (integer)

   The functional form of the outer cutoff function :math:`f_{\textrm{cut}}(r)`:

   - ``type_fcut=1`` power law:

     .. math:: f_{\textrm{cut}}(r) = \left[ \left(\frac{r}{r_{\textrm{cut}}}\right)^2 - 1 \right]^2

   - ``type_fcut=2`` cosine (default):

     .. math:: f_{\textrm{cut}}(r) = \frac{1}{2}\left[ \cos\left( \pi \frac{r}{r_{\textrm{cut}}} \right) + 1 \right]

   - ``type_fcut=3`` smooth plateau + cosine (constant 1 up to
     :math:`r_{\textrm{cut}} - r_{\textrm{cut,width}}`, then a cosine taper).
     This is the form used internally for the *inner* cutoff of several
     descriptors:

     .. math:: f_{\textrm{cut}}(r) = \frac{1}{2}\left[ \cos\left( \pi \frac{ r - r_{\textrm{cut}} + r_{\textrm{cut,width}} }{ r_{\textrm{cut,width}} } \right) + 1 \right] , \quad r_{\textrm{cut}} - r_{\textrm{cut,width}} \le r \le r_{\textrm{cut}}

   - ``type_fcut=4`` quadratic: :math:`f_{\textrm{cut}}(r) = 2\,(r - r_{\textrm{cut}})`.

   Default ``type_fcut=2``.

.. option:: r_cut_in (real)

   The inner cutoff radius (Å). When **positive**, the descriptors are smoothly
   turned off below :math:`r_{\textrm{cut,in}}`, with the same value for all
   element pairs (global mode). When **negative**, the inner cutoff is computed
   automatically for each element pair :math:`(A,B)` from the covalent radii,

   .. math:: r_{\textrm{cut,in}}^{AB} = 0.60\,\frac{ r_{\textrm{cov}}(A) + r_{\textrm{cov}}(B) }{100}

   (:math:`r_{\textrm{cov}}` in pm), clamped to :math:`[0.60, 1.80]` Å.

   Default ``r_cut_in=-1.2`` (automatic, element-specific inner cutoffs).

.. option:: r_cut_width_in (real)

   The width (Å) of the smooth inner-cutoff transition, applied over the
   interval :math:`[\,r_{\textrm{cut,in}},\; r_{\textrm{cut,in}} + r_{\textrm{cut,width,in}}\,]`.

   Default ``r_cut_width_in=0.4``.

k2b: explicit two-body channel
""""""""""""""""""""""""""""""

The **k2b** (kernel 2-body) channel appends an explicit, learnable pair
interaction to the design matrix, independent of the many-body descriptor:

.. math:: \mathbf{A} = \left[\; \mathbf{A}_{\textrm{many-body}} \;\big|\; \mathbf{A}_{\textrm{k2b}} \;\right]

It places :math:`n_{\textrm{rad}}=` ``np_radial_2b`` Gaussian radial functions on
a linearly-spaced grid from 0.2 Å to :math:`r_{\textrm{cut}}^{(2b)}`, with

.. math:: B_i(r) = \delta_{2b}^2 \;\zeta_{\textrm{fcut}}(z_r^{(i)}) \; f_{\textrm{cut}}(r) \; \exp\!\left( -\frac{(r - z_r^{(i)})^2}{2\,\sigma_{2b}^2} \right)

one block of :math:`n_{\textrm{rad}}` columns per unique element pair, so the
channel dimension is
:math:`D_{\textrm{k2b}} = n_{\textrm{rad}} \times N_{\textrm{elem}}(N_{\textrm{elem}}+1)/2`.
It is especially useful together with ZBL, as it provides the learnable
short-range pair interaction that bridges the repulsive core and the many-body
domain.

.. option:: activate_k2b (logical)

   The master switch of the k2b channel. If ``zbl_potential=.true.`` but
   ``activate_k2b=.false.``, k2b is activated automatically (with a warning),
   because the ZBL bridge mode requires it.

   Default ``activate_k2b=.false.``.

.. option:: np_radial_2b (integer)

   The number of Gaussian radial functions :math:`n_{\textrm{rad}}`.

   Default ``np_radial_2b=30``.

.. option:: sigma_2b (real)

   The Gaussian width :math:`\sigma_{2b}` (Å) of each radial basis function.
   Smaller values give sharper, more localized functions.

   Default ``sigma_2b=0.05``.

.. option:: delta_2b (real)

   The amplitude :math:`\delta_{2b}` scaling the whole k2b channel; it sets the
   typical magnitude (in eV) of a 2-body interaction and the weight of the k2b
   channel relative to the many-body descriptor.

   Default ``delta_2b=1.0``.

.. option:: r_cut_2b (real)

   The cutoff radius of the k2b channel. Defaults to ``r_cut`` if not set.

.. option:: r_cut_width_2b (real)

   The width of the k2b cutoff transition. Defaults to ``r_cut_width``.

ZBL: short-range repulsive core
"""""""""""""""""""""""""""""""

The **ZBL** (Ziegler-Biersack-Littmark) potential adds a physics-based repulsive
core for close encounters, where the screened Coulomb repulsion between the
nuclei :math:`Z_i, Z_j` dominates:

.. math:: V_{\textrm{ZBL}}(r) = \frac{Z_i Z_j}{4\pi\varepsilon_0} \, \frac{\phi(r/a)}{r} \; f_{\textrm{cut}}^{\textrm{ZBL}}(r)

with the universal screening function and length

.. math::

   \phi(x) &= 0.32825\,e^{-2.54931\,x} + 0.09219\,e^{-0.29182\,x} + 0.58110\,e^{-0.59231\,x} \\
   a &= \frac{0.46848}{Z_i^{0.23} + Z_j^{0.23}}

and :math:`\varepsilon_0 = 55.26349406\times10^{-4}` e\ :sup:`2`/(eV·Å). A
:math:`C^2`-continuous switching function turns ZBL off between
:math:`r_1^{\textrm{ZBL}}` and :math:`r_2^{\textrm{ZBL}}`:

.. math::

   f_{\textrm{cut}}^{\textrm{ZBL}}(r) =
   \begin{cases}
     1 & r \le r_1^{\textrm{ZBL}} \\
     1 - \chi^3\,(6\chi^2 - 15\chi + 10) & r_1^{\textrm{ZBL}} < r < r_2^{\textrm{ZBL}} \\
     0 & r \ge r_2^{\textrm{ZBL}}
   \end{cases}
   \qquad \chi = \frac{r - r_1^{\textrm{ZBL}}}{r_2^{\textrm{ZBL}} - r_1^{\textrm{ZBL}}}

.. option:: zbl_potential (logical)

   The master switch enabling the ZBL repulsive core.

   Default ``zbl_potential=.false.``.

.. option:: zbl_type (integer)

   The way ZBL is integrated with the many-body (MB) potential:

   - ``zbl_type=1`` *bridge mode* (default). ZBL is connected to the MB
     potential through the k2b channel and a smooth raccordement (bridge)
     function, so the total energy reads
     :math:`E = E_{\textrm{ZBL+bridge}} + E_{\textrm{k2b}} + E_{\textrm{MB}}`.
     It **requires** k2b (auto-activated if needed).
   - ``zbl_type=2`` *additive mode*. The total energy is simply
     :math:`E = E_{\textrm{ZBL}} + E_{\textrm{MB}}`; the MB descriptors use the
     inner cutoff ``r_cut_in`` to vanish at short range, so only ZBL acts there.
     No k2b channel or bridge is needed.

   Default ``zbl_type=1``.

.. option:: r1_zbl (real)

   Below this distance (Å) only the pure ZBL screened Coulomb is used
   (:math:`f_{\textrm{cut}}^{\textrm{ZBL}}=1`). Typically 0.8-1.2 Å.

   Default ``r1_zbl=1.0``.

.. option:: r2_zbl (real)

   Above this distance (Å) ZBL is fully switched off. Typically 1.8-2.5 Å.

   Default ``r2_zbl=2.2``.

.. option:: type_rac_zbl (integer)

   The bridge (raccordement) function connecting ZBL to k2b in ``zbl_type=1``:

   - ``type_rac_zbl=1`` exponential, :math:`f_{\textrm{bridge}}(r)=\exp(a+br+cr^2+dr^3)`
     (:math:`C^1` continuity at the two endpoints).
   - ``type_rac_zbl=2`` polynomial,
     :math:`f_{\textrm{bridge}}(r)=a+br+cr^2+dr^3+er^4+fr^5`
     (:math:`C^2` continuity, default and recommended).

   Default ``type_rac_zbl=2``.

.. note::
   In bridge mode (``zbl_type=1``) the three radii must satisfy the strict
   ordering :math:`r_1^{\textrm{ZBL}} < r_{\textrm{cut,in}}\,(=r_{\textrm{k2b}}) < r_2^{\textrm{ZBL}}`;
   if ``r_cut_in`` is negative it defaults to
   :math:`(r_1^{\textrm{ZBL}} + r_2^{\textrm{ZBL}})/2`, and ``MILADY`` aborts if
   the ordering is violated.

Switching ZBL on/off, with or without k2b
"""""""""""""""""""""""""""""""""""""""""

The two switches ``activate_k2b`` and ``zbl_potential`` (with ``zbl_type``)
combine as follows:

+------------------------------+-----------------+--------------------------------------------------------------+
| Settings                     | Short-range core| Behaviour                                                    |
+==============================+=================+==============================================================+
| ``zbl_potential=.false.``,   | none            | Standard many-body descriptor only.                          |
| ``activate_k2b=.false.``     |                 |                                                              |
+------------------------------+-----------------+--------------------------------------------------------------+
| ``zbl_potential=.false.``,   | learnable pair  | k2b pair channel appended to the many-body descriptor; no    |
| ``activate_k2b=.true.``      |                 | physics-based repulsion.                                     |
+------------------------------+-----------------+--------------------------------------------------------------+
| ``zbl_potential=.true.``,    | ZBL + k2b       | Bridge mode: ZBL → smooth bridge → k2b + many-body. k2b is   |
| ``zbl_type=1``               | + bridge        | required and auto-activated if ``activate_k2b=.false.``.     |
+------------------------------+-----------------+--------------------------------------------------------------+
| ``zbl_potential=.true.``,    | ZBL (additive)  | :math:`E_{\textrm{ZBL}} + E_{\textrm{MB}}`; the inner cutoff |
| ``zbl_type=2``               |                 | removes the many-body part at short range. k2b not required. |
+------------------------------+-----------------+--------------------------------------------------------------+
