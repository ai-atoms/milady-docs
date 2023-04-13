.. _`sec:insta`:

Local build
-----------

Prerequisites
:::::::::::::

The current version of ``MILADY`` requires: 

- A fortran compiler (tested ifort > 2019.x.x, gfortran > 10.x.x)
- The LAPACK / SCALAPACK library (tested MKL distribution > 19.x.x)
- An MPI library  (tested OpenMPI > 4.x.x or IntelMPI > 2019.x.x)
- CMake (tested > 3.18.x) 

Compilation modes
:::::::::::::::::

``MILADY`` has three compilation modes:

.. glossary::
  MILADY-MIX

    - intel compilers (2022.0.1)
    - MKL with ScaLapack support
    - openmpi user-compiled, or system, compatible with intel compilers (> 4.x.x)


  MILADY-INTEL

    - intel compilers included in oneAPI distribution 
    - MKL with ScaLapack support both of them included in the oneAPI distribution 
    - intelmpi equally included in oneAPI distribution. 


  MILADY-GNU

    - GNU compilers (min V9)
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
          
          export MLD_SRCDIR=${MLD_ROODIR}/MILADY
          export MLD_BUIDIR=${MLD_ROODIR}/mld_build
          export MLD_INSDIR=${MLD_ROODIR}/mld_install
          export MLD_TESDIR=${MLD_ROODIR}/mld_testdir
          export MLD_SETENV=ON

          export MKL_ROOT=${MKLROOT}
          export OMP_INSDIR=/usr/local/iopenmpi/
          export OMP_ROOT=/usr/local/iopenmpi/

          export PATH=${MLD_SRCDIR}/scripts:${PATH}
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