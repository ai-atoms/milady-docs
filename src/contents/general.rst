

What is MILADY?
~~~~~~~~~~~~~~~

MILADY — *Machine Learning DYnamics* — is a package created by scientists for
scientists to improve the accuracy and predictive power of atomistic
simulations. It builds machine-learning interatomic potentials and regression
models from *ab initio* data, while keeping a reasonable computational cost.
MILADY is an open-source code distributed under the Academic Software Licence
(ASL), and is coupled to ``LAMMPS`` for large-scale molecular dynamics.

**Main functionalities:**

* Training of machine-learning force fields (energies, forces and stresses) for
  molecular dynamics, with an optional physics-based short-range
  :ref:`ZBL repulsive core and k2b pair channel <sec:low_distance>`.
* Surrogate regression models for materials properties, including vibrational
  entropy, HOMO-LUMO energies, etc.
* Representation of atomic structures in the feature space of atomic
  :ref:`descriptors <sec:descriptors>`, for structural analysis and
  visualization.
* Analysis, sparsification and optimization of datasets (MCD/Mahalanobis and
  CUR selection of reference points).

**Descriptors and models:**

* A large library of atomic :ref:`descriptors <sec:descriptors>`, including the
  Atomic Cluster Expansion (ACE), bispectrum SO(4), Moment Tensor Potentials
  (MTP) and many other choices.
* Only :ref:`models <sec:models>` that are **linear in the parameters**: built
  as polynomials in the descriptors, together with :ref:`kernels <sec:kernel>`
  (including random-feature kernels), the available choice depending on the
  descriptor. They are solved by SVD/QR, block ALS-Ridge, or a low-memory
  online (streaming) solver.

**Advantages of MILADY:**

* Designed for High Performance Computing: well parallelized with MPI, PBLAS and
  ScaLapack, and scalable to large training sets — including a streaming mode
  that avoids storing the full design matrix.
* Reads databases in the native ``.poscar`` format and in
  :ref:`extended XYZ <sec:extxyz>` (ASE-compatible).
* Open-source package — contributions are very welcome.


Build with CMake
~~~~~~~~~~~~~~~~~

``MILADY`` is compiled with **CMake** (≥ 3.24). Once the prerequisites are in
place (a Fortran compiler, ``MKL`` / ``ScaLapack`` and an ``MPI`` library), the
build boils down to:

.. code-block:: bash

  source ${MLD_SRCDIR}/scripts/compile_milady.bash
  f_compile_milady_mix   # or f_compile_milady_intel / f_compile_milady_gnu
  make -j6

The executable is then in ``bin/milady_main.exe``. Both Intel ``ifort`` and
``ifx`` are supported (when the matching MPI / ScaLapack are compatible), and
HDF5 I/O is optional (enabled with ``MLD_HDF5=ON``; a bundled HDF5 is built
automatically unless you point ``HDF5_DIR`` to your own). The full, step-by-step
procedure is on the :ref:`Local build <sec:insta>` page; the former,
Makefile-based way is kept for reference on the
:ref:`Former build (Makefile) <sec:insta_legacy>` page.

Contributors
~~~~~~~~~~~~

| The development of MILADY started in 2015 at SRMP, CEA Saclay, France.
| The current architecture was designed by M.-C. Marinica and A. M. Goryaeva.

| **Main contributors** in chronological order, all current or former members of SRMP, CEA Saclay:
| M.-C. Marinica     (2015-present)
| W. Unn-Toc         (2015-2017)
| A. M. Goryaeva     (2018-present)
| C. Lapointe        (2018-2021)
| J. Deres           (2019-2021)
| J. Baima           (2020 - 2022)
| A. Allera          (2022 - present)
| A. Zhong           (2022 - present)

| **Software development support** is provided by:
| Anida Khizar (LGLS, CEA Saclay),
| Christian Van Wambeke (LGLS, CEA Saclay).

The `coupling of MILADY and LAMMPS <https://github.com/ai-atoms/Lammps-MiLaDy>`_ was developed by
`Thomas D. Swinburne <https://tomswinburne.github.io/>`_ (CINaM, Marseille).

Contact 
~~~~~~~

Questions and suggestions can be sent to :email:`our email<ai.unseen.group@gmail.com>`.
We will be happy to answer!


They appreciate and use MILADY
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: logos/cea.png
   :width: 100
   :target: http://www.cea.fr/
.. image:: logos/cnrs.png
   :width: 100
.. image:: logos/cinam.png
   :width: 100
.. image:: logos/la_rochelle.png
   :width: 100
.. image:: logos/ensulm.jpg
   :width: 100
.. image:: logos/eurofusion.png
   :width: 100
.. image:: logos/CCFE.png
   :width: 100
   :target: https://www.euro-fusion.org/
.. image:: logos/polwar.png 
   :width: 100

