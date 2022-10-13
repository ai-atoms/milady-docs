.. _`sec:insta_irene`:

Build on Irene
----------------

Here we provide the instructions for building ``MILADY`` on the most powerfull french and PRACE 
supercomputer `Irene / JoliotCurie <http://www-hpc.cea.fr/en/complexe/tgcc-JoliotCurie.htm>`_ .

    .. note::
      We describe here the way that we use and we know that it works.
      If you know a better precedure, we are happy to learn about your experience.
      You can send us an email to update the present documentation.

Step 1: Loading modules and setting bash environement
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In the following, ``MILADY`` refers to the github repository. We preserve here the same structure of the
directories as in previous examples.   

1.  Create a directory ``MLD`` and copy ``MILADY`` in that location. 
    Hereafter, ``${MLD}`` is the location of ``MLD`` directory.

2.  Set your ``bash`` environement. My ``${HOME}/.bashrc`` file contains the
    following modules and variables: 

    .. code-block:: bash

      module load mpi/openmpi/4.0.5 scalapack/mkl/21.3.0
      module load fortran/inteloneapi/21.4.0
      module load gnu/10.1.0
      module load cmake/3.18.2
      export OMPI_FC=ifort
      export OMPI_CXX=g++
      export OMPI_CC=gcc

    .. note::

      ``mld_build`` and ``mld_install`` will be created by the installation procedure, whilst
      ``mld_testdir`` is a directory with tests that is not compulsory.

3.  Define in your environement the following ``bash`` function (can be added at the end
    of your ``${HOME}/.bashrc`` file)
  
    .. code-block:: bash

      function f_setenv_milady {
        unset MLD_ROODIR

        unset MLD_ROODIR
        unset MLD_SCRDIR
        unset MLD_SRCDIR
        unset MLD_BUIDIR
        unset MLD_INSDIR
        unset MLD_TESDIR
        unset MLD_SETENV
        unset OMP_INSDIR
        unset OMP_ROOT
       
        export MLD_ROODIR="${MLD}/"
        # I use: export MLD_ROODIR="${CCCWORKDIR}/MLD/"
        [ -z "${MLD_ROODIR}" ] && in_red 'problem undefined MLD_ROODIR, define it'
        export MLD_SRCDIR=${MLD_ROODIR}/MILADY
        export MLD_BUIDIR=${MLD_ROODIR}/mld_build
        export MLD_INSDIR=${MLD_ROODIR}/mld_install
        export MLD_TESDIR=${MLD_ROODIR}/mld_testdir
        export MKL_ROOT=${MKLROOT}
        export OAP_ROODIR=/ccc/products/ifx-21.4.0/system/default/
        export OMP_INSDIR=/ccc/products/openmpi-4.1.1/intel--20.0.0/default
        export OMP_ROOT=/ccc/products/openmpi-4.1.1/intel--20.0.0/default
        export MLD_SETENV=ON
     
        export PATH=${MLD_SRCDIR}/scripts:${PATH}
      }

Step 2: Installation  
^^^^^^^^^^^^^^^^^^^^

1.  Charge the ``MILADY`` bash environement (do not forget to source your ``$HOME/.bashrc`` file before it):

    .. code-block:: bash

      f_setenv_milady
      source ${MLD}/MILADY/scripts/compile_milady.bash


    .. note::
      Do not forget that ``${MLD}`` is defined by you. It is the path to the  ``MLD`` directory.

2.  Install MILADY:

    .. code-block:: bash

      f_compile_milady_mix
      make -j4


And that it is !!!! The executable is in ``bin/milady_main.exe``.
