Input files
===========

The following files are required in the directory where ``MILADY`` is
executed.

.. glossary::

   name.in
   
      A text file which only contains a user-defined string, denoted as ``PREFIXSIM``, which sets the prefix of the simulation, 
      and the name of the ``PREFIXSIM.ml`` file. 
      
   PREFIXSIM.ml

      The ``input`` file is the configuration file for
      ``MILADY``. It is a list of keywords/values which regard: 

      - `the machine learning model <model.html>`__
      - `the descriptors <descriptors.html>`__ 
      - `the database <database.html>`__ 
      - `the weight optimization algorithm <../weight.html>`__.

   db_file

      The file (with the default name ``db_model.in``)
      that controls the design of the database. A description of this file
      can be found in the `database section <database.html>`__.

      .. note::
         
         Others files may be required depending on the keywords set in
         ``PREFIXSIM.ml``.

