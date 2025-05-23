
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { ServiceRecordsList } from '@/components/service-records/ServiceRecordsList';
import { ServiceRecordForm } from '@/components/service-records/ServiceRecordForm';
import { ServiceRecordDetail } from '@/components/service-records/ServiceRecordDetail';

const ServiceRecordsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Debug log to trace routing issues
  useEffect(() => {
    console.log("Current path in ServiceRecordsPage:", location.pathname);
  }, [location]);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route index element={<ServiceRecordsList />} />
          <Route path="new" element={<ServiceRecordForm />} />
          <Route path=":id" element={<ServiceRecordDetail />} />
          <Route path="*" element={<Navigate to="/service-records" replace />} />
        </Routes>
      </div>
    </Layout>
  );
};

export default ServiceRecordsPage;
