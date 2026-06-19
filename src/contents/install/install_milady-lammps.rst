.. _`sec:insta_lammps`:

MILADY potentials in Lammps
---------------------------

In order to use ``MILADY`` potentials with ``Lammps`` you should compile 
``Lammps``with ``Milady`` library. 
The next :ref:`section Using <sec:using_lammps>` briefly summarizes how to 
employ in ``Lammps`` our potentials while the  :ref:`section Installing <sec:install_lammps>` details the 
full ``Lammps + MILADY`` installation. 


.. _`sec:using_lammps`:

Using MILADY potentials 
^^^^^^^^^^^^^^^^^^^^^^^


Running ``Lammps`` with ``MiLaDy`` potentials is easy: 
set in ``Lammps`` input file the ``pair_style`` as ``milady`` and indicate 
the name of your potential file:

.. code-block:: bash

  pair_style milady
  pair_coeff * * Fe_LML.pot Fe

For multi-element systems, you should simply provide the elements for which your potential was designed. 
For example, for a potential developed for a TaTiVW HEA,the ``pair_coeff``
line is as follow: 

.. code-block:: bash

  pair_coeff * * hea.pot Ta Ti V W

.. The ready-to-use input files can be found in Examples of this repository.

You can also compute and output the descriptors with the following command:

.. code-block:: bash

  compute D all milady/atom
  dump 1 all custom 10 dump.milady.* id type c_D[*]

Note that you don't need to set any specific parameters for this compute, and all potential parameters are read directly from the ``*.pot`` file.

.. Actually, this compute doesn't perform any calculations itself. 
.. It simply gathers and outputs the descriptors already calculated by the Milady library during the force computations.


.. _`sec:install_lammps`:

Installing Lammps and MILADY  
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Here we provide the steps for building ``Lammps`` with ``MILADY`` patch, which we will refer to as ``milady_lammps``. 

.. note::

  ``milady_lammps`` installation is similar to ``Lammps`` regular 
  installation for which the  library ``ml-milady`` is on. So far,  
  for the users, which have experience with ``Lammps`` installation they 
  can go directly to ``milady_lammps`` part.      

The current version of ``milady_lammps`` requires:

- Fortran compiler: ``gfortran`` OR ``ifort``
- C++ compiler: ``g++`` 
- MKL library from Intel (for this installation) or any other 
  Lapack/ScaLapack distribution.   

We have tested installations with following versions:

.. code:: bash

  g++        (version >= 9.0.0)
  gfortran   (version >= 9.0.0)
  ifort      (version >= 2018.0.0)
  MKL        (version >= 2018.0.0) with gfortran support



We describe here the way that we use and we know that it works.
If you know a better precedure, we are happy to learn about your experience.
You can :email:`send us an email<ai.unseen.group@gmail.com>` to update the present documentation.


Itegration of MILADY to your existing Lammps installation
:::::::::::::

If you have already ``Lammps`` installed, you can add ``MILADY`` library to your existing ``Lammps`` installation as follows:

1. Clone our repository of ``milady_lammps``:
   
.. code:: bash

  git clone --recursive git@github.com:mcmarinica/milady_lammps.git milady_lammps.git


2. You will find the ``MILADY`` library ``milady_lammps.git/lib/milady``.
Copy this ``milady`` directory in the ``lib`` directory of your ``Lammps`` installation.
For example, if your ``Lammps`` installation is in ``/path/to/lammps``, 
copy ``milady`` directory in ``/path/to/lammps/lib``.

You will also find in ``milady_lammps.git/src/ML-MILADY`` the ``Lammps`` source files that
are needed for ``MILADY``. Copy the folder ``milady_lammps.git/src/ML-MILADY`` to your ``/path/to/lammps/src``.

.. code:: bash

  cp -rp milady_lammps.git/lib/milady /path/to/lammps/lib/
  cp -rp milady_lammps.git/src/ML-MILADY /path/to/lammps/src/


👉 If you use ``make`` for compiling Lammps, follow the next steps: 
""""""""""

3. Go to ``/path/to/lammps/lib`` and compile ``milady`` library.
Choose the compilator for ``milady_lammps``: ``intel`` or ``gfortran``. 
Note that there is no restriction in the choice that you have for the 
compilation of ``Lammps`` (we use default parameters and ``g++`` compiler). 
Below, we provide the 2-step example using Intel Fortran ``ifort``. 
The case of ``gfortran`` is similar.
 
3a. Edit the appropiate  ``Makefile.lammps.ifort`` for your architecture. 
``milady_lammps`` library uses ``MKL`` and some other Intel libraries from 
``Intel Fortran`` compiler. You need to localize the root directory 
for ``MKL`` and ``intel64`` libraries. 
We use ``oneAPI Intel`` free distribution. Here are our choices:

.. code:: bash

  MKLROOT=/opt/intel/oneapi/mkl/latest/
  LIBCOMP=/opt/intel/oneapi/compiler/latest/linux/compiler/lib/intel64/
  
The paths will be similar for any older distribution of ``MKL`` and 
``Intel Fortran``,  such as ``Intel Composer``, ``Intel Parallel Studio``, etc.
If you have doubts: write us :email:`send us an email<ai.unseen.group@gmail.com>` . We are happy to help you !!!!

.. note::

  If this is too painful, for you we provide some examples of ``Makefile.lammps.ifort`` on various 
  computers. Here you can found an 
  ``Makefile.lammps.ifort`` for `HPC Marconi <https://raw.githubusercontent.com/ai-atoms/milady-docs/main/src/contents/install/Files/Makefile.lammps.ifort>`_ , `TGCC Irene <https://raw.githubusercontent.com/ai-atoms/milady-docs/main/src/contents/install/Files/Makefile.lammps.ifort_ForIrene>`_ 
  and `some personal computer <https://raw.githubusercontent.com/ai-atoms/milady-docs/main/src/contents/install/Files/Makefile.lammps.ifort_ForLinux>`_  . 
  After download please copy that file in ``lib/milady/Makefile.lammps.ifort``

3b. Compile ``milady`` library in ``milady_lammps``: 

.. code:: bash 

    cd milady_lammps.git/lib/milady
    make -f Makefile.mpi_ifort  clean 
    make -f Makefile.mpi_ifort   

4. ``milady_lammps`` final compilation .... ouufff.
Turn on  ``MILADY`` library in ``Lammps``:

.. code:: bash

  cd milady_lammps.git/src 
  make yes-ml-milady
  make mpi 


.. warning::
  Sometime the default main makefile of Lammps, i.e. ``Lammps/src/MAKE/Makefile.mpi``, is somehow 
  different from platform to platform. 
  If this last point has some problems, it means that you have some inconsistencies in the ``Lammps`` 
  compilation. Try with one of the following ``Makefile.mpi`` file, which we use for some platfroms, such as 
  `Marconi <https://raw.githubusercontent.com/ai-atoms/milady-docs/main/src/contents/install/Files/Makefile.mpi_Lammps_Marconi>`_ , 
  TGCC Irene 
  or `some personal computer <https://raw.githubusercontent.com/ai-atoms/milady-docs/main/src/contents/install/Files/Makefile.mpi_ForLinux>`_  .   
       

👉 If you use ``cmake`` for compiling Lammps, please make sure that you have the LATEST version of Lammps and follow the next steps: 
""""""""""

3. Copy the ``CMakeLists.txt`` file from ``milady_lammps.git/cmake`` to your ``/path/to/lammps/cmake`` directory.
Then, create a build directory, run ``cmake`` and compile ``Lammps``.

.. code:: bash

  cp -rp milady_lammps.git/cmake/CMakeLists.txt /path/to/lammps/cmake 
  cd /path/to/lammps
  mkdir build ; cd build 
  cmake -DPKG_ML-MILADY=ON -DCMAKE_C_COMPILER=mpicc -DCMAKE_CXX_COMPILER=mpicxx ../cmake
  make -j4 


If your compiler cannot find ``Lapack`` functions, you may need to manually add the ``BLAS`` and ``LAPACK`` libraries in ``cmake/CMakeLists.txt``:

.. code:: bash

  find_package(BLAS REQUIRED)
  find_package(LAPACK REQUIRED)
  target_link_libraries(lmp PRIVATE lammps ${BLAS_LIBRARIES} ${LAPACK_LIBRARIES})

instead of ``target_link_libraries(lmp PRIVATE lammps)``.



That's it! We know ... compilations are painful!

.. note::
  IMPORTANT:  Many thanks to users that have reported some typos, errors in 
  Makefile. In particular many thanks to  Marie Landeiro Dos Reis, Antoine Kraych and Jan Wróbel!



.. _`sec:install_mhondy`:

Installing Lammps and PHONDY / MAB  
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Here we provide the steps for building ``Lammps`` with PHONDY or MAB using either GNU ``gfortran`` or Intel oneAPI ``ifx``. 
Attention: as PHONDY and MAB are mutually 
exclusive (``PKG_PHONDY`` vs ``PKG_MAB``), please keep dedicated build directories per package and compiler to avoid cross-pollution. 

Prerequisites
:::::::::::::

- GNU toolchain and OpenMPI wrappers (``gcc``, ``g++``, ``gfortran``, ``mpicc``, ``mpicxx``, ``mpifort``)
- Intel oneAPI HPC Toolkit (``ifx``, ``mpiifort``, ``mpiicpc``, etc.)
- ScaLAPACK runtime via Intel oneAPI Math Kernel Library (``libscalapack_lp64.so``)
- MPI build enabled in CMake (``-D BUILD_MPI=on``): PHONDY and MAB binaries require MPI interfaces even for nominally serial jobs
- Disable automatic potential downloads for reproducibility: ``-D DOWNLOAD_POTENTIALS=off``

Recommanded toolchains (Nov 2025)

.. csv-table::
   :header: "Component", "Version / build ID", "Notes"
   :quote: "

   "CMake", ">= 4.1.2", "/usr/bin/cmake --version"
   "GNU Fortran", ">= 13.3.0", "gfortran --version"
   "Intel ifx", ">= 2024.2.0 (oneAPI 2024.2)", "ifx --version"
   "OpenMPI", ">= 5.0.7", "mpirun --version"
   "Python", "3.12.3", "Optional, used by integrity_test.py"



Installation procedure
:::::::::::::

1. (Optional) You need to install the latest version of ``Lammps`` if you don't have it.

.. code:: bash
  
  git clone -b release https://github.com/lammps/lammps.git

2. Clone our repository of ``milady_lammps``:
   
.. code:: bash

  git clone --recursive git@github.com:mcmarinica/phondy.git phondy.git

3. Copy this ``phondy.git`` directory in the ``lib`` directory of your ``Lammps`` installation and name it as PHONDY.

.. code:: bash

  cp -rp phondy.git /path/to/lammps/lib/phondy


Then based on your compiler and your target, follow one of the next 4 procedures: 

Procedure A — PHONDY + GNU Fortran (``build-phondy-gfortran``)
""""""""""

A1. Create fresh build directory

.. code:: bash

  cd /path/to/lammps
  rm -rf build-phondy-gfortran
  mkdir build-phondy-gfortran

A2. Configure release build with presets + GNU toolchain

.. code:: bash

  cmake -S cmake -B build-phondy-gfortran \
    -C cmake/presets/gcc.cmake \
    -C cmake/presets/most.cmake \
    -D BUILD_MPI=on \
    -D PKG_PHONDY=on \
    -D DOWNLOAD_POTENTIALS=off \
    -D CMAKE_BUILD_TYPE=Release \
    -D CMAKE_Fortran_COMPILER=gfortran \
    -D MPI_Fortran_COMPILER=mpifort

The preset already prefers GNU compilers; the explicit `-D` flags guarantee we stick with `gfortran` even after previous Intel builds.

Short-form configure (quick rebuilds) can be configured as:

.. code:: bash

  cmake -S cmake -B build-phondy-gfortran \
    -C cmake/presets/gcc.cmake \
    -D DOWNLOAD_POTENTIALS=off \
      -D PKG_MANYBODY=on \
      -D PKG_REPLICA=on \
      -D PKG_PHONDY=on

This trimmed command keeps the essentials for "short" LAMMPS rebuilds—just rerun it after cleaning the build tree when you do not need the full preset stack.

A3. Build complete LAMMPS + PHONDY artifacts

.. code:: bash

  cmake --build build-phondy-gfortran --target lmp -j 8
  cmake --build build-phondy-gfortran --target phondy_main -j 8


Outputs:

- LAMMPS executable with the full ``most.cmake`` package set: ``build-phondy-gfortran/lmp``
- PHONDY driver: ``build-phondy-gfortran/lib/phondy/bin/phondy_main``


Procedure B — PHONDY + Intel Fortran (``build-phondy-ifx``)
""""""""""

B1. Load Intel environment

.. code:: bash

  source /opt/intel/oneapi/setvars.sh
  
B2. Create fresh build directory

.. code:: bash

  cd /path/to/lammps
  rm -rf build-phondy-ifx
  mkdir build-phondy-ifx

B3. Configure Release build pointing to ``ifx`` and matching MPI wrapper

.. code:: bash

  cmake -S cmake -B build-phondy-ifx \
    -C cmake/presets/gcc.cmake \
    -C cmake/presets/most.cmake \
    -D BUILD_MPI=on \
    -D PKG_PHONDY=on \
    -D DOWNLOAD_POTENTIALS=off \
    -D CMAKE_BUILD_TYPE=Release \
    -D CMAKE_Fortran_COMPILER=/opt/intel/oneapi/2024.2/bin/ifx \
    -D MPI_Fortran_COMPILER=/usr/local/iopenmpi.5.0.7/bin/mpifort \
    -D CMAKE_INTERPROCEDURAL_OPTIMIZATION=off


``CMAKE_INTERPROCEDURAL_OPTIMIZATION=off`` prevents GCC LTO objects inside ``liblammps.a`` from requiring the GNU LTO plugin during the final Fortran link.

Short-form configure (quick rebuilds) can be configured as:

.. code:: bash

  cmake -S cmake -B build-phondy-ifx \
  -C cmake/presets/gcc.cmake \
  -D DOWNLOAD_POTENTIALS=off \
    -D PKG_MANYBODY=on \
    -D PKG_REPLICA=on \
    -D PKG_PHONDY=on \
    -D CMAKE_Fortran_COMPILER=ifx \
    -D MPI_Fortran_COMPILER=mpifort \
    -D CMAKE_INTERPROCEDURAL_OPTIMIZATION=off

Use this when you just need the lean Intel-based PHONDY build without the more exhaustive preset overrides.

B4. Build complete LAMMPS + PHONDY artifacts

.. code:: bash

  cmake --build build-phondy-ifx --target lmp -j 8
  cmake --build build-phondy-ifx --target phondy_main -j 8

Outputs:

- Full ``lmp`` binary under ``build-phondy-ifx/lmp``
- PHONDY driver under ``build-phondy-ifx/lib/phondy/bin/phondy_main``


.. note::
  - Keep both build directories to flip between compilers instantly.
  - Add ``-D ENABLE_TESTING=on`` if you plan to run the broader unit-test suite.
  - Swapping presets: use ``cmake/presets/basic.cmake`` for faster builds with fewer packages, or toggle packages individually with ``-D PKG_<NAME>=on/off``.
  - For pure GNU builds you may re-enable IPO/LTO (``-D CMAKE_INTERPROCEDURAL_OPTIMIZATION=on``) to squeeze more performance, but leave it off when mixing Intel Fortran with GNU C++ objects.
  - If CMake cannot locate MPI, point it to the wrapper binaries explicitly (``-D MPI_C_COMPILER=/usr/local/iopenmpi/bin/mpicc``, etc.) and ensure the matching ``lib64`` directory is on ``LD_LIBRARY_PATH`` during the configure step.


Procedure C — MAB + GNU Fortran (``build-mab-gfortran``)
""""""""""

C1. Fresh build directory

.. code:: bash

  cd /path/to/lammps
  rm -rf build-mab-gfortran
  mkdir build-mab-gfortran


C2. Configure Release build with MAB enabled

.. code:: bash

  cmake -S cmake -B build-mab-gfortran \
    -C cmake/presets/gcc.cmake \
    -C cmake/presets/most.cmake \
    -D BUILD_MPI=on \
    -D PKG_MAB=on \
    -D PKG_PHONDY=off \
    -D DOWNLOAD_POTENTIALS=off \
    -D CMAKE_BUILD_TYPE=Release \
    -D CMAKE_Fortran_COMPILER=gfortran \
    -D MPI_Fortran_COMPILER=mpifort

MAB pulls in the same PHONDY library sources but links the ``mab_main`` driver. Keeping PHONDY off avoids duplicate targets.

Short-form configure (quick rebuilds) can be configured as:

.. code:: bash

  cmake -S cmake -B build-mab-gfortran \
  -C cmake/presets/gcc.cmake \
  -D PKG_MAB=on \
  -D PKG_PHONDY=off \
  -D PKG_MANYBODY=on \
  -D PKG_REPLICA=on \
  -D DOWNLOAD_POTENTIALS=off

Use this trimmed variant after the first configuration when you simply need to refresh the existing GNU build tree.

C3. Build the ``mab_main`` executable

.. code:: bash

  cmake --build build-mab-gfortran --target mab_main -j 8

Output: ``build-mab-gfortran/lib/phondy/bin/mab_main``

.. C4. (Optional) Verification

.. .. code:: bash

..   cd /path/to/lammps/lib/phondy/mab_phondy_test
..   python integrity_test.py run mab


Procedure D — MAB + Intel Fortran (``build-mab-ifx``)
""""""""""

D1. Load Intel environment

.. code:: bash

  source /opt/intel/oneapi/setvars.sh


D2. Create isolated build directory

.. code:: bash

  cd /path/to/lammps
  rm -rf build-mab-ifx
  mkdir build-mab-ifx

D3. Configure (``PKG_MAB`` on, ``PKG_PHONDY`` off)

.. code:: bash

  cmake -S cmake -B build-mab-ifx \
    -C cmake/presets/gcc.cmake \
    -C cmake/presets/most.cmake \
    -D BUILD_MPI=on \
    -D PKG_MAB=on \
    -D PKG_PHONDY=off \
    -D DOWNLOAD_POTENTIALS=off \
    -D CMAKE_BUILD_TYPE=Release \
    -D CMAKE_Fortran_COMPILER=/opt/intel/oneapi/2024.2/bin/ifx \
    -D MPI_Fortran_COMPILER=/usr/local/iopenmpi.5.0.7/bin/mpifort \
    -D CMAKE_INTERPROCEDURAL_OPTIMIZATION=off

``CMAKE_INTERPROCEDURAL_OPTIMIZATION=off`` is again critical when mixing Intel Fortran with the GNU-built LAMMPS C++ objects.

Short-form configure (quick rebuilds) can be configured as:

.. code:: bash

  cmake -S cmake -B build-mab-ifx \
  -C cmake/presets/gcc.cmake \
  -D PKG_MAB=on \
  -D PKG_PHONDY=off \
  -D PKG_MANYBODY=on \
  -D PKG_REPLICA=on \
  -D DOWNLOAD_POTENTIALS=off \
  -D CMAKE_Fortran_COMPILER=ifx \
  -D MPI_Fortran_COMPILER=mpifort \
  -D CMAKE_INTERPROCEDURAL_OPTIMIZATION=off

D4. Build the ``mab_main`` executable

.. code:: bash

  cmake --build build-mab-ifx --target mab_main -j 8
  
Output: ``build-mab-ifx/lib/phondy/bin/mab_main``


Package selection defaults
""""""""""

LAMMPS packages are opt-in, and the build picks up whatever combination you enable with ``-D PKG_<NAME>=on/off`` (or the legacy ``make yes-<name>`` flow). 
The instructions above assume the ``cmake/presets/most.cmake`` preset is loaded, which now serves as the default package set for PHONDY/MAB work. 
That preset flips on the "most commonly needed" packages—``MANYBODY``, ``MOLECULE``, ``KSPACE``, ``RIGID``, ``REPLICA``, etc.—so you get a feature-complete ``lmp`` without hand-toggling dozens of options.

- To slim the build down, drop the ``most.cmake`` preset (use ``basic.cmake`` instead) and explicitly re-enable only the packages you need via ``-D PKG_<NAME>=on``.
- To add extras on top of ``most.cmake``, just append more ``-D PKG_<NAME>=on`` arguments; the preset values are only defaults and can be overridden per build.
- If you temporarily disable PHONDY/MAB (``-D PKG_PHONDY=off``, ``-D PKG_MAB=off``), remember that ``most.cmake`` will still toggle the other packages unless you override them explicitly.



Running PHONDY vs MAB integrity tests
:::::::::::::
The ``phondy.git`` repository includes a regression helper to validate PHONDY and MAB builds against a suite of reference calculations.
The regression helper lives in ``lib/phondy/mab_phondy_test``. 
It can now target PHONDY-only, MAB-only, or the combined suite using an optional selector argument:

.. code:: bash

  cd /path/to/lammps/lib/phondy/mab_phondy_test
  python integrity_test.py clean phondy   # clean only PHONDY directories
  python integrity_test.py run phondy     # run PHONDY validations
  python integrity_test.py clean mab      # clean only MAB directories
  python integrity_test.py run mab        # run MAB validations
  python integrity_test.py run            # default = all tests

- The script reads ``integrity.json`` for the PHONDY (``exe_phondy``) and MAB (``exe_mab``) executable paths; update those fields if you rename build directories.
- PHONDY and MAB share support files, so keep separate build trees (``build-phondy-*``, ``build-mab-*``) to avoid CMake cache conflicts.



Build types: Release vs Debug
:::::::::::::

.. csv-table::
   :header: "Build type", "Typical flag set", "When to use"
   :quote: "

   "``Release``", "``-O3 -DNDEBUG``", "Production-quality binaries (default in this guide)."
   "``RelWithDebInfo``", "``-O2 -g -DNDEBUG``", "Profiling or reproducing user issues with symbols but decent performance."
   "``Debug``", "``-O0 -g`` (plus runtime checks if you add them)", "Deep debugging, AddressSanitizer/UBSan runs, extra asserts/logging."
   "``MinSizeRel``", "``-Os -DNDEBUG``", "Size-constrained environments (rare for HPC but available)."


Single-config generators (Unix Makefiles, Ninja, etc.)
""""""""""

Pick one type at configure time:

.. code:: bash

  cmake -S cmake -B build-phondy-gfortran \
  ... \
  -D CMAKE_BUILD_TYPE=RelWithDebInfo

Reconfigure if you need to switch types (or keep parallel build directories per type)

Multi-config generators (Ninja Multi-Config, Visual Studio)
""""""""""
Omit ``CMAKE_BUILD_TYPE``, then choose at build time:

.. code:: bash

  cmake --build build-phondy-gfortran --target phondy_main --config Debug -j 8
  cmake --build build-phondy-gfortran --target phondy_main --config Release -j 8


Custom tweaks
""""""""""

Override the per-language flags if needed (examples):

.. code:: bash

  -D CMAKE_CXX_FLAGS_DEBUG="-O0 -g3 -fsanitize=address"
  -D CMAKE_Fortran_FLAGS_RELEASE="-O3 -march=native"

You can also set generator expressions like ``CMAKE_BUILD_TYPE=Debug`` plus ``-D ENABLE_TESTING=on`` for debug-only checks.

IPO/LTO
""""""""""

Leave ``-D CMAKE_INTERPROCEDURAL_OPTIMIZATION=off`` whenever Intel Fortran links against GNU-built C++ objects (mixed toolchain). Re-enable it only for pure GNU or pure Intel builds with the appropriate plugin installed.

