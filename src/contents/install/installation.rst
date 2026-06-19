.. _`sec:insta`:

Local build
-----------

.. important::

   ``MILADY`` is built with **CMake** (≥ 3.24). The CMake workflow described on
   this page is the **only supported and tested** way to compile the code: the
   compilers and the ``MKL`` / ``ScaLapack`` / ``MPI`` libraries are detected
   automatically through the ``scripts/compile_milady.bash`` helper functions,
   so there is no ``Makefile`` to edit by hand.

   The former, Makefile-based procedure is kept for reference on the
   :ref:`Former build (Makefile) <sec:insta_legacy>` page.

Prerequisites
:::::::::::::

The current version of ``MILADY`` requires:

- A fortran compiler (tested ``ifort`` > 2020.x.x, ``ifx`` > 2023.x.x, ``gfortran`` > 12.x.x)
- The LAPACK / SCALAPACK library (tested MKL distribution > 19.x.x)
- An MPI library  (tested OpenMPI > 4.x.x or IntelMPI > 2020.x.x)
- CMake (tested > 3.24.x)

and *optionally*:

- The HDF5 library (Fortran interface) — only relevant if you enable the HDF5 I/O support.

.. note:: **HDF5 I/O is optional and self-contained.** By default ``MILADY``
   compiles without HDF5. To enable it, export ``MLD_HDF5=ON`` before invoking
   CMake. Then:

   - if you set ``HDF5_DIR`` to a Fortran-enabled HDF5 build, that HDF5 is used;
   - otherwise ``MILADY`` builds its **own bundled HDF5 (1.14.3) automatically**
     (as a CMake ``ExternalProject``), so no system HDF5 needs to be installed.

.. note:: **Intel ``ifx`` is supported** in addition to the classic ``ifort``.
   You can build with ``ifx`` as long as the associated MPI and MKL / ScaLapack
   are compatible with it (e.g. ``mpiifx`` / a recent oneAPI). Use
   ``f_compile_milady_mix_ifx`` (instead of ``f_compile_milady_mix_ifort``) to
   select the ``ifx`` compiler.

Compilation modes
:::::::::::::::::

``MILADY`` has three compilation modes:

.. glossary::
  MILADY-MIX

    - intel compilers ``ifort`` or ``ifx`` (> 2022.0.1)
    - MKL with ScaLapack support
    - openmpi user-compiled, or system, compatible with intel compilers (> 4.x.x)


  MILADY-INTEL

    - intel compilers (``ifort`` / ``ifx``) included in oneAPI distribution
    - MKL with ScaLapack support both of them included in the oneAPI distribution 
    - intelmpi equally included in oneAPI distribution. 


  MILADY-GNU

    - GNU compilers (min V12)
    - MKL or LAPACK/ScaLapack support for GNU.
    - openmpi user-compiled, or system, gnu-compiled

.. Hint:: Our preference is MILADY-MIX, using the intel fortran compiler and MKL / SCALAPACK provided by oneAPI (> 2022.x.x). OpenMPI (> 4.x.x) is compiled by our means using ifort compiler.

Compilation
:::::::::::

Step 1: Setting environment variables 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In the following, ``MILADY`` refers to the github repository.

1.  Create a directory ``MLD`` and copy ``MILADY`` in that location. 
    Hereafter, ``${MLD}`` is the location of ``MLD`` directory.

2.  Your environment should contain the following 9 variables, which are compulsory for the compilation ``MILADY``

    The first six variables:

    .. code-block:: bash

      export MLD_ROODIR=${MLD}
      export MLD_SRCDIR=${MLD_ROODIR}/MILADY
      export MLD_BUIDIR=${MLD_ROODIR}/mld_build
      export MLD_INSDIR=${MLD_ROODIR}/mld_install
      export MLD_TESDIR=${MLD_ROODIR}/mld_testdir
      export MLD_SETENV=ON

    .. note::

      ``mld_build`` and ``mld_install`` will be created by the installation procedure, whilst
      ``mld_testdir`` is a directory of tests that is not compulsory (more details later). 

    The last 3 variables, followed by a redefinition of ``PATH``:

    .. code-block:: bash

      export MKL_ROOT=${MKLROOT}
      export OMP_INSDIR=/usr/local/iopenmpi
      export OMP_ROOT=${OMP_INSDIR}
      export PATH=${MLD_ROODIR}/MILADY/scripts:${PATH}

    ``MKL_ROOT`` and ``OMP_INSDIR`` should contain the installation path to ``MKL`` and ``openMPI``, respectively.

    .. Tip:: (Optional) It can be more convenient to set the environment variable using a bash function:
      
      .. code-block:: bash

        function f_setenv_milady_marinica {
          unset MLD_ROODIR
          unset MLD_SCRDIR
          unset MLD_SRCDIR
          unset MLD_BUIDIR
          unset MLD_INSDIR
          unset MLD_TESDIR
          unset MLD_SETENV
          unset OMP_INSDIR
          unset OMP_ROOT
          export MLD_ROODIR="${HOME}/MLD"
          export MLD_SRCDIR=${MLD_ROODIR}/ml.git
          export MLD_BUIDIR=${MLD_ROODIR}/mld_build
          export MLD_INSDIR=${MLD_ROODIR}/mld_install
          export MLD_TESDIR=${MLD_ROODIR}/mld_testdir
        
        
          export MKL_ROOT=${MKLROOT}
          export OMP_INSDIR=/usr/local/iopenmpi/
          export OMP_ROOT=/usr/local/iopenmpi/
          export MLD_MPI_INSDIR=/usr/local/iopenmpi/
          export MLD_MKL_LIB=${MKLROOT}
        
          export PATH=${MLD_SRCDIR}/scripts:${PATH}
        
          export MLD_SETENV=ON
          
        }
Step 2: Compilation
^^^^^^^^^^^^^^^^^^^^


1.  Charge the bash functionalities:

    .. code-block:: bash

      source ${MLD_SRCDIR}/scripts/compile_milady.bash

    with a typical output:

    .. code-block:: bash
        
      Now you could type:
      f_setenv_milady
      f_compile_milady_mix or
      f_compile_milady_intel or
      f_compile_milady_gnu

2.  Invoke CMake (here in MILADY-MIX mode):

    ::

      f_compile_milady_mix

    .. tip:: In MIX mode you can pick the Intel compiler explicitly with
       ``f_compile_milady_mix_ifort`` (classic ``ifort``) or
       ``f_compile_milady_mix_ifx`` (next-generation ``ifx``), provided the
       associated MPI and MKL / ScaLapack are compatible with the chosen
       compiler.

    with a typical output: 

    .. code-block:: bash

      Now you could type:
      make -j6
      make install
      f_ctest_milady
      f_explore_milady

3.  Compile the code (as suggested by the output of 2.) 

    .. code-block:: bash

      make -j6 # will use 6 parallel jobs

THAT'S ALL FOLKS !!! The executable is in ``bin/milady_main.exe``.

In order to test, run the step-by-step examples provided in the `Examples section <examples.html>`__.

.. seealso::

   Looking for the old, hand-edited ``Makefile`` procedure? See the
   :ref:`Former build (Makefile) <sec:insta_legacy>` page (legacy, reference only).