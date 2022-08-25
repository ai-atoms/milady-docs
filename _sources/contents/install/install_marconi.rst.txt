.. _`sec:insta_marconi`:

Build on Marconi
----------------

Here we provide the instructions for building ``MILADY`` on the widely used
supercomputer `MARCONI <https://www.hpc.cineca.it/hardware/marconi>`_ .

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

      module load env-skl
      module load intel/pe-xe-2020--binary
      module load mkl/2020--binary
      module load intelmpi/2020--binary
      module load cmake/3.18.2
      export I_MPI_FC=ifort
      export I_MPI_F90=ifort
      export I_PMI_CXX=g++
      export I_MPI_CC=gcc

    .. note::

      ``mld_build`` and ``mld_install`` will be created by the installation procedure, whilst
      ``mld_testdir`` is a directory with tests that is not compulsory.

3.  Define in your environement the following ``bash`` function (can be added at the end
    of your ``${HOME}/.bashrc`` file)
  
    .. code-block:: bash

      function f_setenv_milady{
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
        
        export MLD_SRCDIR=${MLD_ROODIR}/MILADY
        export MLD_BUIDIR=${MLD_ROODIR}/mld_build
        export MLD_INSDIR=${MLD_ROODIR}/mld_install
        export MLD_TESDIR=${MLD_ROODIR}/mld_testdir
        export MLD_SETENV=ON
        export MKL_ROOT=${MKLROOT}
        export OMP_INSDIR=/cineca/prod/opt/compilers/intel/pe-xe-2020/binary/impi/2019.9.304/intel64/
        export OMP_ROOT=/cineca/prod/opt/compilers/intel/pe-xe-2020/binary/impi/2019.9.304/intel64/
     
        export PATH=${MLD_ROODIR}/MILADY/scripts:${PATH}
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

      f_compile_milady_intel
      make -j6


And that it is !!!! The executable is in ``bin/milady_main.exe``.