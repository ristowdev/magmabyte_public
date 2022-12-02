
import React from 'react';
import { useParams } from 'react-router-dom';
import PageContent from '../../../components/atoms/Contents/PageContent';

import Sidebar from "../../../components/organisam/common/SideBar";
import HomeEdit from '../../../components/organisam/home-page';
import Section1Edit from '../../../components/organisam/home-page/section-1';
import Section2Edit from '../../../components/organisam/home-page/section-2';
import Section3Edit from '../../../components/organisam/home-page/section-3';
import Section4Edit from '../../../components/organisam/home-page/section-4';
import Section5Edit from '../../../components/organisam/home-page/section-5';
import Section6Edit from '../../../components/organisam/home-page/section-6';
import SidebarAndHeader from '../../../components/templates/HeaderWithSideBar';


function SectionEditPage() {
    const {
        id = null
    } = useParams();

    return (
       <>   
            {id && (<> 
            <SidebarAndHeader />
            <PageContent
                headerTitle={`Edit ${(id !== '0' && id !== '7') ? 'section '+id : (id==='0') ? 'header' : (id==='7') ? 'footer' : ''}`}
            >
                <>
                    {id==='1' && < Section1Edit />}
                    {id==='2' && <Section2Edit />}
                    {id==='3' && <Section3Edit />}
                    {id==='4' && <Section4Edit />}
                    {id==='5' && <Section5Edit />}
                    {id==='6' && <Section6Edit />}
                </>
            </PageContent>
            </>)}
       </>
    );
  }
  
  export default SectionEditPage;
  