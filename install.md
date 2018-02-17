## Install guide

1) Following links will help you install the tools necessary, i.e. you will have the developmental tools to interact with the Hyperledger-Composer and also the Hyperledger-Fabric where you deploy the business networks you create.

    [Installing pre-requisites depending upon your OS](https://hyperledger.github.io/composer/installing/installing-prereqs)<br>
    [Install basic hyperledger composer handy tools and fabric (following till step 4)](https://hyperledger.github.io/composer/installing/development-tools)


2) After that just run the following commands to start the Hyperledger-Fabric runtime and create a AdminCard for your peer which will be needed in the future to deploy business networks to your peer.
(Note: There can be mutiple peers in a single machine)

    ```
    cd ~/fabric-tools
    ./startFabric.sh
    ./createPeerAdminCard.sh
    ```

3) Next clone this repository anywhere and navigate into it by the following command

        `git clone https://github.com/nobodyme/simple-blockchain-network.git && cd simple-blockchain-network`

4) Now that we have our business network, we create an archive of this business network which is ready to be deployed to the fabric using the following command.

        `composer archive create -t dir -n .`

5) Now install the composer runtime with the PeerAdmin@hlfv1 that's automatically created previously along with the name of the business network which in our case is simple-buy-and-sell-network

        `composer runtime install --card PeerAdmin@hlfv1 --businessNetworkName tutorial-network`

6) The above command will deploy our business network as well as create the admincard for our business network, remember the previous one was for the peer on the machine and this one is for our business-network

        `composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile simple-buy-and-sell-network@0.0.1.bna --file networkadmin.card`


7) Next run the following two commands to import the card we created and ping it to check if our network has been succesfully depolyed

        `composer card import --file networkadmin.card`

        `composer network ping --card admin@simple-buy-and-sell-network`

8) You'll get a success message, now this means our blockchain business network is able to talk with our fabric environment and all set to test.

    [Okay that's a lot of work to install, what does this business work really do and how do I test it?](https://github.com/nobodyme/simple-blockchain-network/blob/master/simple-buy-and-sell-network/README.md)

9) Before that, just run,

        `composer-playground`

    I know it opens up your network in a cool browser right? now go on [see what it can do](https://github.com/nobodyme/simple-blockchain-network/blob/master/simple-buy-and-sell-network/README.md)
