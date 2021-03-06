import React from 'react';
import { Router } from '@reach/router';

// Common
import { GLOBALS } from '../utils/globals';

// Data Store
import RootStore from './stores/root.store';
import WalletStore from './stores/wallet.store';
import TransactionStore from './stores/transaction.store';

// Page Templates
import AppLayout from './layout/AppLayout';
import Accelerator from './pages/Accelerator';
import ConnectWallet from './pages/ConnectWallet';

function App() {
    return (
        <RootStore>
            <WalletStore>
                <TransactionStore>
                    <AppLayout>
                        <Router>
                            <Accelerator path={GLOBALS.ACCELERATOR_ROOT} />
                            <ConnectWallet path={`${GLOBALS.ACCELERATOR_ROOT}/connect`} />
                        </Router>
                    </AppLayout>
                </TransactionStore>
            </WalletStore>
        </RootStore>
    );
}

export default App;
