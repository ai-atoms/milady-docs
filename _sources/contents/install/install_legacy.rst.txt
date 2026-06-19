.. _`sec:insta_legacy`:

Former build (Makefile)
-----------------------

.. warning::

   This page documents the **legacy**, Makefile-based way of compiling
   ``MILADY``. It pre-dates the current build system and is kept **for
   reference only**: it is no longer maintained nor tested.

   New users should follow the :ref:`Local build <sec:insta>` page, which
   uses **CMake** and is the only supported and tested procedure.

Before the migration to ``CMake``, ``MILADY`` was compiled by hand-editing a
``Makefile`` for the target architecture (compiler, ``MKL`` / ``LAPACK`` /
``ScaLapack`` and ``MPI`` paths) and then running ``make`` directly. The same
mechanism is still used for the ``MILADY`` library that is linked into
``Lammps`` (see :ref:`MILADY potentials in Lammps <sec:insta_lammps>`).

Makefile templates
::::::::::::::::::::

A few ready-to-adapt ``Makefile`` templates are kept in the repository, under
``src/contents/install/Files``. They can be used as a starting point and edited
to match the compilers and library paths of your machine:

- `Makefile.mpi <https://raw.githubusercontent.com/ai-atoms/milady-docs/main/src/contents/install/Files/Makefile.mpi>`_
- `Makefile.mpi_ForLinux <https://raw.githubusercontent.com/ai-atoms/milady-docs/main/src/contents/install/Files/Makefile.mpi_ForLinux>`_
- `Makefile.mpi_Lammps_Marconi <https://raw.githubusercontent.com/ai-atoms/milady-docs/main/src/contents/install/Files/Makefile.mpi_Lammps_Marconi>`_
- `Makefile.lammps.ifort <https://raw.githubusercontent.com/ai-atoms/milady-docs/main/src/contents/install/Files/Makefile.lammps.ifort>`_

Typical legacy procedure
::::::::::::::::::::::::::

1.  Pick the ``Makefile`` template closest to your platform and edit the
    compiler, ``MKL`` / ``ScaLapack`` and ``MPI`` paths.

2.  Compile with a plain ``make`` invocation, for example:

    .. code-block:: bash

      make -f Makefile.mpi clean
      make -f Makefile.mpi

.. note::

   Because this procedure required manual editing of paths for every machine,
   it has been replaced by the :ref:`CMake build <sec:insta>`, which detects
   the compilers and libraries automatically through the
   ``scripts/compile_milady.bash`` helper functions. If in doubt, use the
   :ref:`Local build <sec:insta>` page.
