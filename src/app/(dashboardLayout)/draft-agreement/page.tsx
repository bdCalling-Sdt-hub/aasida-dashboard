import DraftAgreementEditor from '@/components/(dashboardLayout)/draft-agreement/DraftAgreementEditor';
import React from 'react';

const DraftAgreement = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold w-full">Applicants List</h1>
            <DraftAgreementEditor></DraftAgreementEditor>
        </div>
    );
};

export default DraftAgreement;