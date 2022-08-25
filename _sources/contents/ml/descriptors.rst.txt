
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

   #. ``descriptor_type=5`` Smooth Overlap of Atomic Positions (SOAP)

   #. ``descriptor_type=6`` Power Spectrum SO3

   #. ``descriptor_type=7`` Bispectrum SO3

   #. ``descriptor_type=8`` Power Spectrum SO4

   #. ``descriptor_type=9`` bispectrum SO4

   #. ``descriptor_type=14`` hybrid G2 + AFS

   #. ``descriptor_type=19`` hybrid G2 + bispectrum SO4

   #. ``descriptor_type=100`` MTP\ :math:`^3` (up to order
      :math:`M_{\mu,\nu}`, with :math:`\nu \le 3`)

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


SOAP
----

To use  SOAP, set ``descriptor_type=5``.

Parameters
""""""""""

The parameters of the descriptor are controlled by the options of the number of Gaussian
radial functions ``n_soap`` and maximum of the spherical harmonics
``l_max``.
If the ``nspecies_soap`` is set, the number of components
are, if ``lsoap_diag=.true.``: ``(l_max + 1)`` :math:`\times`
``n_soap`` :math:`\cdot` ``nspecies_soap``\ :math:`\times`
(``n_soap`` :math:`\cdot` ``nspecies_soap`` +1)/2, whilst, if
``lsoap_diag=.false.`` the number of components is much less
``(l_max + 1)`` :math:`\times` ``n_soap`` :math:`\times`
``nspecies_soap``\ :math:`\times` (``nspecies_soap`` +1)/2.

.. option::  n_soap (integer)

   The number of Gaussians.


   Default ``n_soap=4``

.. option::  l_max (integer)

   The max l of the spherical harmonics.

   Default ``l_max=5``

.. option::  lsoap_diag (logical)

   The SOAP descriptor is diagonal in radial functions.

   Default ``lsoap_diag=.false.``

.. option::  lsoap_lnorm (logical)

   The SOAP descriptor is normalized in each :math:`l`-angular channel by a factor :math:`1/(2l+1)`.

   Default ``lsoap_lnorm=.false.``

.. option::  lsoap_norm (logical)

   The SOAP descriptor is normalized.

   Default ``lsoap_norm=.false.``

.. option::  r_cut_width_soap  (double precision)

   The intermediate regime for the cutoff function.

   Default ``r_cut_width_soap=0.5d0``

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


Bispectrum SO3
--------------

To use bispectrum SO3, set ``descriptor_type=7``.

Parameters
""""""""""


The parameters of the descriptor are controlled by the number of Gaussian radial
functions, ``n_rbf``, and maximal angular momentum of spherical
harmonics, ``(l_max``. The bispectrum SO3 descriptor components of
the :math:`i^{th}` atom are obtained from the power spectrum SO3
coefficients :math:`c_{nlm}^i`:

.. math::

   b_{n l l_1 l_2}^i = \sum_{m=-l}^{l}\sum_{m_1=-l_1}^{l_1} \sum_{m_2=-l_2}^{l_2} c_{ n l m}^{*i}C_{m m_1 m_2}^{l l_1 l_2} c_{n l_1 m_1}^i c_{n l_2 m_2}^i
                     \nonumber

where :math:`C_{m m_1 m_2}^{l l_1 l_2}` is the 3-dimensional
Clebsch-Gordan coefficients. The dimension of this desriptor is
difficult to know beforehand. The naive estimation of the dimension
is ``n_rbf`` :math:`\times` ``(l_max + 1)``\ :math:`^3`. However, the
selection rules of the Clebsch-Gordan coefficients reduce drastically
this number e.g. for ``n_rbf=7`` and ``l_max=5`` the number of
components is ``140`` (instead ). This number follow the GC/Karakala
convention and take only the diagonal CG coefficients i.e.
:math:`l_1=l_2` in previous equation. This condition can be released
using ``lbso3_diag=.false.`` (in the above mentioned the dimension
becomes ``483``). For numerical reasons, is highly recommended to use
ONLY the diagonal form.

.. option::  n_rbf (integer)

   The number of Gaussian (radial) functions.

   Default ``n_rbf=4``

.. option::  l_max (integer)

   The max values of the angular moment.

   Default ``l_max=4``

.. option::  lbso3_diag (logical)

   If are taken the full bispectrum coeffcient (overcomplete), ``.false.`` or only diagonal
   :math:`l_1=l_2` ``.true.``

   Default ``lbso3_diag=.false.``


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
   :math:`L^1` norm. It is active only for cases ``snap_fit_type=0``
   (for a fixed positive value of ``lambda_krr`` and
   ``snap_fit_type=10`` (for a grid). For details see the correspoding
   documentation. For negative values this option is skipped and
   standard fit is performed.

   Default ``lambda_krr=-1.d0``
