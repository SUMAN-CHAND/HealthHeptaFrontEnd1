import React from 'react';
import './App.css';
import OurService from './component/OurService';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './component/Home';
import BookAppointment from './component/ModalBookAppointment';
import AppoitmentConfirmation from './component/AppoitmentConfirmation';
import Doctor from './component/Doctor';
import ListOfDoctors from './component/ListOfDoctors';
import BookAppointmentFrom from './component/BookAppointmentFrom';
import MainMedicinePage from './component/MainMedicinePage';
import ProductList from './component/ProductList';
import ParticularProductPage from './component/ParticularProductPage';
import OrderPage from './component/OrderPage';
import OrderPaymentPage from './component/OrderPaymentPage';
import LabTestMainPage from './component/LabTestMainPage';
import Header from './component/Header';
import Header2 from './component/Header2';
import Fotter from './component/Fotter';
import Login from './component/Login';
import SignUp from './component/SignUp';
import MainClinicPage from './component/MainClinicPage';
import ParticularClinic from './component/ParticularClinic';
import UserProfile from './component/UserProfile';
import ParticularProductOfOrderStatus from './component/ParticularProductOfOrderStatus';
import AdminHomePage from './component/AdminPanel/AdminHomePage';
import AdminSignUp from './component/AdminPanel/AdminSignup';
import AdminLogin from './component/AdminPanel/AdminLogin';
import AddProduct from './component/AdminPanel/AddProduct';
import UpdateProduct from './component/AdminPanel/UpdateProduct';
import ViewProductModal from './component/AdminPanel/ViewProductModal';
import ViewUser from './component/AdminPanel/ViewUser';
import ViewOrder from './component/AdminPanel/ViewOrder';
import Sub_Admin_Login from './component/Service_Provider/Sub_Admin_Login';
import Sub_Admin_SignUp from './component/Service_Provider/Sub_Admin_SignUp';
import Sub_Admin_Home_Page from './component/Service_Provider/Sub_Admin_Home_Page';
import AddProductBySubAdmin from './component/Service_Provider/AddProductBySubAdmin';
import ViewSubAdminProfile from './component/AdminPanel/ViewSubAdminProfile';
import ViewOrderBySubAdmin from './component/Service_Provider/ViewOrderBySubAdmin';
import ViewPaymentBySubAdmin from './component/Service_Provider/ViewPaymentBySubAdmin';
import UpdateProductBySubAdmin from './component/Service_Provider/UpdateProductBySubAdmin';
import ViewOrderBySubAdminDemo from './component/Service_Provider/ViewOrderBySubAdminDemo';
import AddCoupon from './component/AdminPanel/AddCoupon';
import ViewSubAdminProducts from './component/AdminPanel/ViewSubAdminProducts';
import MedicinePageSearchResult from './component/MedicinePageSearchResult';
import AddNewServiceProvider from './component/AdminPanel/AddNewServiceProvider';
import ViewSubAdminOrders from './component/AdminPanel/ViewSubAdminOrders';
import UploadImage from './component/UploadImage';
import CompelteProfileFrom from './component/Service_Provider/CompelteProfileFrom';
import AddNewDoctor from './component/Service_Provider/AddNewDoctor';
import RescheduleAppoiment from './component/RescheduleAppoiment';
import SeeRequestReschedule from './component/Service_Provider/SeeRequestReschedule';
import B2BHomePage from './component/B2B System/B2BHomePage';
import AllProductPage from './component/B2B System/AllProductPage';
import ParticularProduct from './component/B2B System/ParticularProduct';
import B2bOrderPage from './component/B2B System/B2bOrderPage';
import B2BHeader2 from './component/B2B System/B2BHeader2';
import B2BHeader from './component/B2B System/B2BHeader';
import B2BHome from './component/AdminPanel/B2BPanal.js/B2BHome';
import B2BAddNewProductBySuperAdmin from './component/AdminPanel/B2BPanal.js/B2BAddNewProductBySuperAdmin';
import B2BCartPage from './component/B2B System/B2BCartPage';
import AllMadicineByMargin from './component/B2B System/AllMadicineByMargin';
import AllMadicineByLot from './component/B2B System/AllMedicineByLot';
import Partner_SignUp from './component/Partner/Partner_SignUp';
import Partner_Login from './component/Partner/Partner_Login';
import Partner_Home from './component/Partner/Partner_Home';
import Partner_Complete_Profile from './component/Partner/Partner_Complete_Profile';
import AddNewPartner from './component/AdminPanel/AddNewPartner';
import AddNewPartnerCommission from './component/AdminPanel/AddNewPartnerCommission';
import ViewDocuments from './component/AdminPanel/ViewDocuments';
import UpdatePartnerCommission from './component/AdminPanel/UpdatePartnerCommission';
import DoctorTimeTable from './component/Service_Provider/DoctorTimeTable';
import AddNewLaboratoryTest from './component/Service_Provider/AddNewLaboratoryTest';
import BookLabTest from './component/BookLabTest';
import ParticularLaboratory from './component/ParticularLaboratory';
import PaymentPage from './component/PaymentPage';
import LabSearchResults from './component/LabSearchResults';
import RescheduleLabTest from './component/RescheduleLabTest';
import SeeRequestRescheduleOfLab from './component/Service_Provider/SeeRequestRescheduleOfLab';
import UserProfileOrder from './component/UserProfileOrder';
import UserProfileLabBooking from './component/UserProfileLabBooking';
import UserProfileAppoiments from './component/UserProfileAppoiments';
import UserProfileParticularLabTest from './component/UserProfileParticularLabTest';
import UserProfileParticularAppoiment from './component/UserProfileParticularAppoiment';
import ImageCompressor from './component/ImageCompressor';
import Delivery_Partner_Login from './component/Delivery_Partner/Delivery_Partner_Login';
import Delivery_Partner_Complete_Profile from './component/Delivery_Partner/Delivery_Partner_Complete_Profile';
import Delivery_Partner_SignUp from './component/Delivery_Partner/Delivery_Partner_SignUp';
import Delivery_Partner_Home from './component/Delivery_Partner/Delivery_Partner_Home';
import Delivery_Partner_Header from './component/Delivery_Partner/Delivery_Partner_Header';
import OrderAction from './component/AdminPanel/OrderAction';
import AddNewDeliveryPartnerCommission from './component/AdminPanel/AddNewDeliveryPartnerCommission';
import UpdateDeliveryPartnerCommission from './component/AdminPanel/UpdateDeliveryPartnerCommission';
import AddNewDeliveryPartner from './component/AdminPanel/AddNewDeliveryPartner';
import MyMap from './component/Map/MyMap';
import OrderBill from './component/OrderBill';

function App() {
  return (
    <>
      <div className="App">

        <Router>
          <div className="">
            {/* <Header /> */}
            {/* <Header2 /> */}
            <Routes>
              <Route path='/' element={<><Header /><Header2 /><Home /></>} exact />
              {/* <Route path='/' Component={UploadImage} exact /> */}
              <Route path='/service' element={<><Header /><Header2 /><OurService /></>} exact />
              <Route path='/book-appointment' element={<><Header /><Header2 /><BookAppointment /></>} exact />
              <Route path='/success-appointment' element={<><Header /><Header2 /><AppoitmentConfirmation /></>} exact />
              <Route path='/doctor/:id' element={<><Header /><Header2 /><Doctor /></>} exact />
              <Route path='/book/lab-test/:id' element={<><Header /><Header2 /><BookLabTest /></>} exact />
              <Route path='/book/lab-test/payment' element={<><Header /><Header2 /><PaymentPage /></>} exact />
              <Route path='/listofdoctor' element={<><Header /><Header2 /><ListOfDoctors /></>} exact />
              <Route path='/lab-search-result' element={<><Header /><Header2 /><LabSearchResults /></>} exact />
              <Route path='/appoitment-from' element={<><Header /><Header2 /><BookAppointmentFrom /></>} exact />
              <Route path='/medicines' element={<><Header /><Header2 /><MainMedicinePage /></>} exact />
              <Route path='/medicines/:selectLocation' element={<><Header /><Header2 /><MedicinePageSearchResult /></>} exact />
              <Route path='/medicines/:location' element={<><Header /><Header2 /><MainMedicinePage /></>} exact />
              <Route path='/product' element={<><Header /><Header2 /><ProductList /></>} exact />
              <Route path='/addtocart/:product_id' element={<><Header /><Header2 /><ParticularProductPage /></>} exact />
              <Route path='/cart' element={<><Header /><Header2 /><OrderPage /></>} exact />
              <Route path='/orders' element={<><Header /><Header2 /><OrderPaymentPage /></>} exact />
              {/* <Route path='/order/bill' element={<><Header /><Header2 /><OrderBill /></>} exact /> */}
              <Route path='/lab-test' element={<><Header /><Header2 /><LabTestMainPage /></>} exact />
              <Route path='/login' element={<><Header /><Header2 /><Login /></>} exact />
              <Route path='/signup' element={<><Header /><Header2 /><SignUp /></>} exact />
              <Route path='/clinic-test' element={<><Header /><Header2 /><MainClinicPage /></>} exact />
              <Route path='/particular-clinic' element={<><Header /><Header2 /><ParticularClinic /></>} exact />
              <Route path='/profile' element={<><Header /><Header2 /><UserProfile /></>} exact />
              <Route path='/profile/orders' element={<><Header /><Header2 /><UserProfileOrder /></>} exact />
              <Route path='/profile/lab-booking' element={<><Header /><Header2 /><UserProfileLabBooking /></>} exact />
              <Route path='/profile/lab-booking/:id' element={<><Header /><Header2 /><UserProfileParticularLabTest /></>} exact />
              <Route path='/profile/appoiments/:id' element={<><Header /><Header2 /><UserProfileParticularAppoiment /></>} exact />
              <Route path='/profile/appoiments' element={<><Header /><Header2 /><UserProfileAppoiments /></>} exact />
              <Route path='/profile/address' element={<><Header /><Header2 /><UserProfile /></>} exact />
              <Route path='/profile/phone' element={<><Header /><Header2 /><UserProfile /></>} exact />
              <Route path='/order/:order_id/product/:product_id' element={<><Header /><Header2 /><ParticularProductOfOrderStatus /></>} exact />
              <Route path='/reschedule/:appoiment_id' element={<><Header /><Header2 /><RescheduleAppoiment /></>} exact />
              <Route path='/reschedule/lab/:appoiment_id' element={<><Header /><Header2 /><RescheduleLabTest /></>} exact />
              <Route path='/particular-laboratory/:id' element={<><Header /><Header2 /><ParticularLaboratory /></>} exact />
              <Route path='/img/compression' element={<><Header /><Header2 /><ImageCompressor /></>} exact />
              {/* <Route path='/map' element={<><Header /><Header2 /><MyMap /></>} exact /> */}
            </Routes>
          </div>
          <Routes>
            {/* Super Admin Routes */}
            <Route path='/superadmin' Component={AdminHomePage} exact />
            {/* <Route path='/superadmin/b2b' Component={AdminHomePage} exact /> */}
            {/* <Route path='/superadmin/list-products' Component={AdminHomePage} exact /> */}
            <Route path='/superadmin/addproduct' Component={AddProduct} exact />
            <Route path='/superadmin/addnew/service-provider' Component={AddNewServiceProvider} exact />
            <Route path='/superadmin/addnew/partner' Component={AddNewPartner} exact />
            <Route path='/superadmin/addnew/delivery-partner' Component={AddNewDeliveryPartner} exact />
            <Route path='/superadmin/complete-profile' Component={CompelteProfileFrom} exact />
            <Route path='/superadmin/addnew/partner-commission' Component={AddNewPartnerCommission} exact />
            <Route path='/superadmin/addnew/delivery-partner-commission' Component={AddNewDeliveryPartnerCommission} exact />
            <Route path='/superadmin/update-commission/:commission_id' Component={UpdatePartnerCommission} exact />
            <Route path='/superadmin/delivery/update-commission/:commission_id' Component={UpdateDeliveryPartnerCommission} exact />
            <Route path='/superadmin/updateproduct/:product_id' Component={UpdateProduct} exact />
            {/* <Route path='/superadmin/orders/product/:product_id' Component={ViewProductModal} exact /> */}
            <Route path='/superadmin/orders/:id/:user_id/:product_id' Component={ViewOrderBySubAdminDemo} exact />
            <Route path='/superadmin/orders/action/:id/:user_id/:product_id' Component={OrderAction} exact />
            <Route path='/superadmin/orders/order/:order_id' Component={ViewOrder} exact />
            <Route path='/superadmin/orders/customer/:user_id' Component={ViewUser} exact />
            <Route path='/superadmin/signup' Component={AdminSignUp} exact />
            <Route path='/superadmin/login' Component={AdminLogin} exact />
            <Route path='/superadmin/subadmin/profile/:id' Component={ViewSubAdminProfile} exact />
            <Route path='/superadmin/subadmin/products/:user_id' Component={ViewSubAdminProducts} exact />
            <Route path='/superadmin/subadmin/orders/:user_id' Component={ViewSubAdminOrders} exact />
            <Route path='/superadmin/addcoupon' Component={AddCoupon} exact />
            <Route path='/superadmin/addcoupon/:coupon_id' Component={AddCoupon} exact />
            <Route path='/superadmin/b2b' Component={B2BHome} exact />
            <Route path='/superadmin/b2b/addproduct' Component={B2BAddNewProductBySuperAdmin} exact />
            <Route path='/superadmin/image/:image_id' Component={ViewDocuments} exact />

          </Routes>
          <Routes>
            {/* Partner Routes */}
            <Route path='/partner/login' element={<><Header /><Header2 /><Partner_Login /></>} exact />
            <Route path='/partner/signup' element={<><Header /><Header2 /><Partner_SignUp /></>} exact />
            <Route path='/partner/complete-profile' element={<><Header /><Header2 /><Partner_Complete_Profile /></>} exact />
            <Route path='/partner/home' element={<><Header /><Header2 /><Partner_Home /></>} exact />
            <Route path='/partner/home/orders' element={<><Header /><Header2 /><UserProfileOrder /></>} exact />
            <Route path='/partner/home/lab-booking' element={<><Header /><Header2 /><UserProfileLabBooking /></>} exact />
            <Route path='/partner/home/appoiments' element={<><Header /><Header2 /><UserProfileAppoiments /></>} exact />
            <Route path='/partner/home/clinic' element={<><Header /><Header2 /><Partner_Home /></>} exact />
            <Route path='/partner/home/lab-booking/:id' element={<><Header /><Header2 /><UserProfileParticularLabTest /></>} exact />
            <Route path='/partner/home/appoiments/:id' element={<><Header /><Header2 /><UserProfileParticularAppoiment /></>} exact />


          </Routes>
          <Routes>
            {/*Delivery Partner Routes */}
            <Route path='/delivery-partner/login' element={<><Delivery_Partner_Header /><Delivery_Partner_Login /></>} exact />
            <Route path='/delivery-partner/signup' element={<><Delivery_Partner_Header /><Delivery_Partner_SignUp /></>} exact />
            <Route path='/delivery-partner/complete-profile' element={<><Delivery_Partner_Header /><Delivery_Partner_Complete_Profile /></>} exact />
            <Route path='/delivery-partner/home' element={<><Delivery_Partner_Header /><Delivery_Partner_Home /></>} exact />
            {/* <Route path='/partner/home/orders' element={<><Header /><Header2 /><UserProfileOrder /></>} exact />
            <Route path='/partner/home/lab-booking' element={<><Header /><Header2 /><UserProfileLabBooking /></>} exact />
            <Route path='/partner/home/appoiments' element={<><Header /><Header2 /><UserProfileAppoiments /></>} exact />
            <Route path='/partner/home/clinic' element={<><Header /><Header2 /><Partner_Home /></>} exact />
            <Route path='/partner/home/lab-booking/:id' element={<><Header /><Header2 /><UserProfileParticularLabTest /></>} exact />
            <Route path='/partner/home/appoiments/:id' element={<><Header /><Header2 /><UserProfileParticularAppoiment /></>} exact /> */}


          </Routes>
          <Routes>
            {/* Sub Admin Routes */}
            <Route path='/sub-admin/login' element={<><B2BHeader /><Sub_Admin_Login /></>} exact />
            <Route path='/sub-admin/signup' element={<><B2BHeader /><Sub_Admin_SignUp /></>} exact />
            <Route path='/sub-admin/complete-profile' element={<><B2BHeader /><CompelteProfileFrom /></>} exact />
            <Route path='/sub-admin/home' element={<><B2BHeader /><Sub_Admin_Home_Page /></>} exact />
            <Route path='/sub-admin/home/address' element={<><B2BHeader /><Sub_Admin_Home_Page /></>} exact />
            <Route path='/sub-admin/home/phone' element={<><B2BHeader /><Sub_Admin_Home_Page /></>} exact />
            <Route path='/sub-admin/home/updateproduct/:product_id' element={<><B2BHeader /><UpdateProductBySubAdmin /></>} exact />
            <Route path='/sub-admin/home/add-new-doctor' element={<><B2BHeader /><AddNewDoctor /></>} exact />
            <Route path='/sub-admin/home/add-new-laboratory-test' element={<><B2BHeader /><AddNewLaboratoryTest /></>} exact />
            <Route path='/sub-admin/orders/:id/:user_id/:product_id' element={<><B2BHeader /><ViewOrderBySubAdminDemo /></>} exact />
            <Route path='/sub-admin/payment/:order_id/:user_id/:product_id' element={<><B2BHeader /><ViewPaymentBySubAdmin /></>} exact />
            <Route path='/sub-admin/reschedule/:appoiment_id' element={<><B2BHeader /><RescheduleAppoiment /></>} exact />
            <Route path='/sub-admin/reschedule/:appoiment_id' element={<><B2BHeader /><RescheduleLabTest /></>} exact />
            <Route path='/sub-admin/reschedule/see/:appoiment_id' element={<><B2BHeader /><SeeRequestReschedule /></>} exact />
            <Route path='/sub-admin/reschedule/see/lab/:appoiment_id' element={<><B2BHeader /><SeeRequestRescheduleOfLab /></>} exact />
            <Route path='/sub-admin/home/timetable/doctor/:doctor_id' element={<><B2BHeader /><DoctorTimeTable /></>} exact />

          </Routes>
          <Routes>
            {/* B2B Routes */}
            <Route path='/b2b-home' element={<><B2BHeader /><B2BHeader2 /> <B2BHomePage /></>} exact />
            <Route path='/b2b-home/margin' element={<><B2BHeader /><B2BHeader2 /> <AllMadicineByMargin /></>} exact />
            <Route path='/b2b-home/lotproduct' element={<><B2BHeader /><B2BHeader2 /> <AllMadicineByLot /></>} exact />
            {/* <Route path='/b2b/products' element={<><B2BHeader/><B2BHeader2 /> <AllProductPage /></>}  exact /> */}
            <Route path='/b2b/addtocart/:product_id' element={<><B2BHeader /><B2BHeader2 /> <ParticularProduct /></>} exact />
            <Route path='/b2b/cart' element={<><B2BHeader /><B2BHeader2 /> <B2BCartPage /></>} exact />
            <Route path='/b2b/order' element={<><B2BHeader /><B2BHeader2 /> <B2bOrderPage /></>} exact />
            <Route path='/b2b/medicines/:selectLocation' element={<><B2BHeader /><B2BHeader2 />< AllProductPage /></>} exact />
          </Routes>


          <Fotter />
        </Router>
      </div>

    </>
  );
}

export default App;
