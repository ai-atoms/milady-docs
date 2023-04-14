.. _`sec:docker`:



Pull the image
::::::::::::::

For easier access to Milady, we provide pre-buit Docker images, which are publicly available on DockerHub. 
We recommend this approach for new users.

.. Hint:: Using docker pre-built images allow for an installation with minimal effort, for use on both workstations and HPC facilities (using Singularity or pcocc to run Docker images).

.. Warning:: Using pre-built images, expect some performance reduction compared to building from source. For HPC use and if performance is crucial, we recommend going through the route of compiling on your target platform.



To get started with the Milady Docker image, follow these steps:

1. Install Docker Engine by following the instructions available at https://docs.docker.com/engine/.

2. Pull the Milady Docker image from DockerHub:

.. code-block:: bash

   docker pull aallera/milady:1.0.2


Now that you have the Milady Docker image, you can use it based on the following usage examples:

Usage
:::::

Run Milady in the current directory and exit:

1. With 4 CPUs (default):

.. code-block:: bash

   docker run -it --rm -v "$(pwd):/workspace" aallera/milady:1.0.2

2. With 8 CPUs (using the ``-np 8`` option):

.. code-block:: bash

   docker run -it --rm -v "$(pwd):/workspace" aallera/milady:1.0.2 -np 8

Run Jupyter in the container:

.. code-block:: bash

   docker run -it --rm -p 8888:8888 -v "$(pwd):/workspace" aallera/milady:1.0.2 shell

.. Hint:: Exposing the current directory to the container with ``-v`` allows you to export your results to disk.

This command opens a shell inside the container.
Then, you can run the following command to start the Jupyter Notebook:

.. code-block:: bash

   notebook


You can also interactively navigate in the container, where the current directory of the host is mounted to ``/workspace``.
The Milady executable is available with the command:

.. code-block:: bash

   milady
