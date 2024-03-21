import React, { Suspense, lazy } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import HashLoader from 'react-spinners/HashLoader';
import Header from './component/Header';
import Header2 from './component/Header2';
import Home from './component/Home';
import Delivery_Partner_Header from './component/Delivery_Partner/Delivery_Partner_Header';
import B2BHeader from './component/B2B System/B2BHeader';
import B2BHeader2 from './component/B2B System/B2BHeader2';

import Fotter from './component/Fotter';
import B2BEmployee_Header from './component/B2BEmployee/B2BEmployee_Header';
import AdminHeader from './component/AdminPanel/AdminHeader';


const AppoitmentConfirmation = lazy(() => import('./component/AppoitmentConfirmation'));
const Doctor = lazy(() => import('./component/Doctor'));
const ListOfDoctors = lazy(() => import('./component/ListOfDoctors'));
const BookAppointmentFrom = lazy(() => import('./component/BookAppointmentFrom'));
const MainMedicinePage = lazy(() => import('./component/MainMedicinePage'));
const ProductList = lazy(() => import('./component/ProductList'));
const ParticularProductPage = lazy(() => import('./component/ParticularProductPage'));
const OrderPage = lazy(() => import('./component/OrderPage'));
const OrderPaymentPage = lazy(() => import('./component/OrderPaymentPage'));
const LabTestMainPage = lazy(() => import('./component/LabTestMainPage'));
const Login = lazy(() => import('./component/Login'));
const SignUp = lazy(() => import('./component/SignUp'));
const MainClinicPage = lazy(() => import('./component/MainClinicPage'));
const ParticularClinic = lazy(() => import('./component/ParticularClinic'));
const UserProfile = lazy(() => import('./component/UserProfile'));
const ParticularProductOfOrderStatus = lazy(() => import('./component/ParticularProductOfOrderStatus'));
const AdminHomePage = lazy(() => import('./component/AdminPanel/AdminHomePage'));
const AdminSignUp = lazy(() => import('./component/AdminPanel/AdminSignup'));

const AdminLogin = lazy(() => import('./component/AdminPanel/AdminLogin'));
const AddProduct = lazy(() => import('./component/AdminPanel/AddProduct'));
const UpdateProduct = lazy(() => import('./component/AdminPanel/UpdateProduct'));
const ViewUser = lazy(() => import('./component/AdminPanel/ViewUser'));
const ViewOrder = lazy(() => import('./component/AdminPanel/ViewOrder'));
const Sub_Admin_Login = lazy(() => import('./component/Service_Provider/Sub_Admin_Login'));
const Sub_Admin_SignUp = lazy(() => import('./component/Service_Provider/Sub_Admin_SignUp'));
const Sub_Admin_Home_Page = lazy(() => import('./component/Service_Provider/Sub_Admin_Home_Page'));
const ViewSubAdminProfile = lazy(() => import('./component/AdminPanel/ViewSubAdminProfile'));
const ViewPaymentBySubAdmin = lazy(() => import('./component/Service_Provider/ViewPaymentBySubAdmin'));
const UpdateProductBySubAdmin = lazy(() => import('./component/Service_Provider/UpdateProductBySubAdmin'));
const ViewOrderBySubAdminDemo = lazy(() => import('./component/Service_Provider/ViewOrderBySubAdminDemo'));
const ViewOrderBySuperAdmin = lazy(() => import('./component/AdminPanel/ViewOrderBySuperAdmin'));
const AddCoupon = lazy(() => import('./component/AdminPanel/AddCoupon'));
const ViewSubAdminProducts = lazy(() => import('./component/AdminPanel/ViewSubAdminProducts'));
const MedicinePageSearchResult = lazy(() => import('./component/MedicinePageSearchResult'));
const AddNewServiceProvider = lazy(() => import('./component/B2BEmployee/AddNewServiceProvider'));
const ViewSubAdminOrders = lazy(() => import('./component/AdminPanel/ViewSubAdminOrders'));
const CompelteProfileFrom = lazy(() => import('./component/Service_Provider/CompelteProfileFrom'));
const AddNewDoctor = lazy(() => import('./component/Service_Provider/AddNewDoctor'));
const RescheduleAppoiment = lazy(() => import('./component/RescheduleAppoiment'));
const SeeRequestReschedule = lazy(() => import('./component/Service_Provider/SeeRequestReschedule'));
const B2BHomePage = lazy(() => import('./component/B2B System/B2BHomePage'));
const AllProductPage = lazy(() => import('./component/B2B System/AllProductPage'));
const ParticularProduct = lazy(() => import('./component/B2B System/ParticularProduct'));
const B2bOrderPage = lazy(() => import('./component/B2B System/B2bOrderPage'));
const B2BHome = lazy(() => import('./component/AdminPanel/B2BPanal.js/B2BHome'));
const B2BAddNewProductBySuperAdmin = lazy(() => import('./component/AdminPanel/B2BPanal.js/B2BAddNewProductBySuperAdmin'));
const B2BCartPage = lazy(() => import('./component/B2B System/B2BCartPage'));
const AllMadicineByMargin = lazy(() => import('./component/B2B System/AllMadicineByMargin'));
const AllMadicineByLot = lazy(() => import('./component/B2B System/AllMedicineByLot'));
const Partner_SignUp = lazy(() => import('./component/Partner/Partner_SignUp'));
const Partner_Login = lazy(() => import('./component/Partner/Partner_Login'));
const Partner_Home = lazy(() => import('./component/Partner/Partner_Home'));
const Partner_Complete_Profile = lazy(() => import('./component/Partner/Partner_Complete_Profile'));
const AddNewPartner = lazy(() => import('./component/AdminPanel/AddNewPartner'));
const AddNewB2BEmployee = lazy(() => import('./component/AdminPanel/AddNewB2BEmployee'));
const AddNewPartnerCommission = lazy(() => import('./component/AdminPanel/AddNewPartnerCommission'));
const ViewDocuments = lazy(() => import('./component/AdminPanel/ViewDocuments'));
const UpdatePartnerCommission = lazy(() => import('./component/AdminPanel/UpdatePartnerCommission'));
const DoctorTimeTable = lazy(() => import('./component/Service_Provider/DoctorTimeTable'));
const AddNewLaboratoryTest = lazy(() => import('./component/Service_Provider/AddNewLaboratoryTest'));
const BookLabTest = lazy(() => import('./component/BookLabTest'));
const ParticularLaboratory = lazy(() => import('./component/ParticularLaboratory'));
const PaymentPage = lazy(() => import('./component/PaymentPage'));
const LabSearchResults = lazy(() => import('./component/LabSearchResults'));
const RescheduleLabTest = lazy(() => import('./component/RescheduleLabTest'));
const SeeRequestRescheduleOfLab = lazy(() => import('./component/Service_Provider/SeeRequestRescheduleOfLab'));
const UserProfileOrder = lazy(() => import('./component/UserProfileOrder'));
const UserProfileLabBooking = lazy(() => import('./component/UserProfileLabBooking'));
const UserProfileAppoiments = lazy(() => import('./component/UserProfileAppoiments'));
const UserProfileParticularLabTest = lazy(() => import('./component/UserProfileParticularLabTest'));
const UserProfileParticularAppoiment = lazy(() => import('./component/UserProfileParticularAppoiment'));
const ImageCompressor = lazy(() => import('./component/ImageCompressor'));

const Delivery_Partner_Login = lazy(() => import('./component/Delivery_Partner/Delivery_Partner_Login'));
const Delivery_Partner_Complete_Profile = lazy(() => import('./component/Delivery_Partner/Delivery_Partner_Complete_Profile'));
const Delivery_Partner_SignUp = lazy(() => import('./component/Delivery_Partner/Delivery_Partner_SignUp'));
const Delivery_Partner_Home = lazy(() => import('./component/Delivery_Partner/Delivery_Partner_Home'));

const OfferProductPage = lazy(() => import('./component/OfferProductPage'));
const AllProductOfAMedicineShop = lazy(() => import('./component/AllProductOfAMedicineShop'));
const MedicineShopSearchResult = lazy(() => import('./component/MedicineShopSearchResult'));
const OrderBill = lazy(() => import('./component/OrderBill'));
const AddNewDeliveryPartner = lazy(() => import('./component/AdminPanel/AddNewDeliveryPartner'));
const UpdateDeliveryPartnerCommission = lazy(() => import('./component/AdminPanel/UpdateDeliveryPartnerCommission'));
const AddNewDeliveryPartnerCommission = lazy(() => import('./component/AdminPanel/AddNewDeliveryPartnerCommission'));
const OrderAction = lazy(() => import('./component/AdminPanel/OrderAction'));

const B2BEmployee_Login = lazy(() => import('./component/B2BEmployee/B2BEmployee_Login'));
const B2BEmployee_Home = lazy(() => import('./component/B2BEmployee/B2BEmployee_Home'));
const B2BOrderbill = lazy(() => import('./component/B2B System/B2BOrderbill'));
const AddProductWhichIsNotPresent = lazy(() => import('./component/B2BEmployee/AddProductWhichIsNotPresent'));
const AddNewCustomer = lazy(() => import('./component/B2BEmployee/AddNewCustomer'));
const OrderActionBySubAdmin = lazy(() => import('./component/Service_Provider/OrderActionBySubAdmin'));
const B2BSuperAdminOrderBill = lazy(() => import('./component/AdminPanel/B2BPanal.js/B2BSuperAdminOrderBill'));
const AddProductBySubAdmin = lazy(() => import('./component/Service_Provider/AddProductBySubAdmin'));
const B2BOrderAction = lazy(() => import('./component/AdminPanel/B2BPanal.js/B2BOrderAction'));
const B2BPaymentCompleteAction = lazy(() => import('./component/AdminPanel/B2BPanal.js/B2BPaymentCompleteAction'));
const LabStatusUpdate = lazy(() => import('./component/AdminPanel/LabStatusUpdate'));
const PaymentCompleteAction = lazy(() => import('./component/AdminPanel/PaymentCompleteAction'));
const PaymentCompleteActionBySub_Admin = lazy(() => import('./component/Service_Provider/PaymentCompleteActionBySub_Admin'));
const LabPaymentCompleteActionBySub_Admin = lazy(() => import('./component/Service_Provider/LabPaymentCompleteActionBySub_Admin'));
const AppoitmentPaymentCompleteActionBySub_Admin = lazy(() => import('./component/Service_Provider/AppoitmentPaymentCompleteActionBySub_Admin'));



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
              {/* <Route path='/book-appointment' element={<><Header /><Header2 /><BookAppointment /></>} exact /> */}
              <Route path='/success-appointment' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><AppoitmentConfirmation /></Suspense> </>} exact />
              <Route path='/doctor/:id' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><Doctor /></Suspense></>} exact />
              <Route path='/book/lab-test/:id' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><BookLabTest /></Suspense></>} exact />
              <Route path='/book/lab-test/payment' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><PaymentPage /></Suspense></>} exact />
              <Route path='/listofdoctor' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><ListOfDoctors /></Suspense></>} exact />
              <Route path='/lab-search-result' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><LabSearchResults /></Suspense></>} exact />
              <Route path='/appoitment-from' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><BookAppointmentFrom /></Suspense></>} exact />
              {/* <Route path='/medicines' element={<><Header /><Header2 /><Suspense  fallback={<HashLoader color="#36d7b7" />}><MainMedicinePage /></Suspense></>} exact /> */}
              <Route path='/medicine/offer/:id/%off' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><OfferProductPage /></Suspense></>} exact />
              <Route path='/medicines/:selectLocation' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><MedicinePageSearchResult /></Suspense></>} exact />
              {/* <Route path='/medicineshop/search' element={<><Header /><Header2 /><Suspense  fallback={<HashLoader color="#36d7b7" />}><MedicineShopSearchResult /></Suspense></>} exact /> */}
              <Route path='/medicines/:location' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><MainMedicinePage /></Suspense></>} exact />
              {/* <Route path='/product' element={<><Header /><Header2 /><ProductList /></>} exact /> */}
              <Route path='/addtocart/:product_id' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><ParticularProductPage /></Suspense></>} exact />
              <Route path='/cart' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><OrderPage /></Suspense></>} exact />
              <Route path='/orders' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><OrderPaymentPage /></Suspense></>} exact />
              <Route path='/order/bill' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><OrderBill /></Suspense></>} exact />
              <Route path='/lab-test' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><LabTestMainPage /></Suspense></>} exact />
              <Route path='/login' element={<><Header /><Header2 /><div className='dis-flex'><Suspense fallback={<HashLoader color="#36d7b7" />}><Login /></Suspense></div></>} exact />
              <Route path='/signup' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><SignUp /></Suspense></>} exact />
              <Route path='/clinic-test' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><MainClinicPage /></Suspense></>} exact />
              <Route path='/particular-clinic' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><ParticularClinic /></Suspense></>} exact />
              <Route path='/profile' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><UserProfile /></Suspense></>} exact />
              <Route path='/profile/orders' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><UserProfileOrder /></Suspense></>} exact />
              <Route path='/profile/lab-booking' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><UserProfileLabBooking /></Suspense></>} exact />
              <Route path='/profile/lab-booking/:id' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><UserProfileParticularLabTest /></Suspense></>} exact />
              <Route path='/profile/appoiments/:id' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><UserProfileParticularAppoiment /></Suspense></>} exact />
              <Route path='/profile/appoiments' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><UserProfileAppoiments /></Suspense></>} exact />
              {/* <Route path='/profile/address' element={<><Header /><Header2 /><UserProfile /></>} exact />
              <Route path='/profile/phone' element={<><Header /><Header2 /><UserProfile /></>} exact /> */}
              <Route path='/order/:order_id/product/:product_id' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><ParticularProductOfOrderStatus /></Suspense></>} exact />
              <Route path='/reschedule/:appoiment_id' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><RescheduleAppoiment /></Suspense></>} exact />
              <Route path='/reschedule/lab/:appoiment_id' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><RescheduleLabTest /></Suspense></>} exact />
              <Route path='/particular-laboratory/:id' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><ParticularLaboratory /></Suspense></>} exact />
              <Route path='/img/compression' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><ImageCompressor /></Suspense></>} exact />
              <Route path='/medicineshop/products/:id' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><AllProductOfAMedicineShop /></Suspense></>} exact />
              {/* <Route path='/map' element={<><Header /><Header2 /><MyMap /></>} exact /> */}
            </Routes>

          </div>
          <div>

            <Routes>
              {/* Super Admin Routes */}
              <Route path='/superadmin' element={<> <AdminHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><AdminHomePage /></Suspense></>} exact />
              {/* <Route path='/superadmin/b2b' Component={AdminHomePage} exact /> */}
              {/* <Route path='/superadmin/list-products' Component={AdminHomePage} exact /> */}
              <Route path='/superadmin/addproduct' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><AddProduct /></Suspense></>} exact />
              <Route path='/superadmin/addnew/service-provider' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><AddNewServiceProvider /></Suspense></>} exact />
              <Route path='/superadmin/complete-profile' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><CompelteProfileFrom /></Suspense></>} exact />
              <Route path='/superadmin/addnew/partner' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><AddNewPartner /></Suspense></>} exact />
              <Route path='/superadmin/addnew/b2bemployee' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><AddNewB2BEmployee /></Suspense></>} exact />
              <Route path='/superadmin/addnew/delivery-partner' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><AddNewDeliveryPartner /></Suspense></>} exact />
              <Route path='/superadmin/addnew/partner-commission' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><AddNewPartnerCommission /></Suspense></>} exact />
              <Route path='/superadmin/addnew/delivery-partner-commission' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><AddNewDeliveryPartnerCommission /></Suspense></>} exact />
              <Route path='/superadmin/update-commission/:commission_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><UpdatePartnerCommission /></Suspense></>} exact />
              <Route path='/superadmin/delivery/update-commission/:commission_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><UpdateDeliveryPartnerCommission /></Suspense></>} exact />
              <Route path='/superadmin/updateproduct/:product_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><UpdateProduct /></Suspense></>} exact />
              {/* <Route path='/superadmin/orders/product/:product_id' Component={ViewProductModal} exact /> */}
              <Route path='/superadmin/orders/:id/:user_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><ViewOrderBySuperAdmin /></Suspense></>} exact />
              <Route path='/superadmin/orders/action/:id/:user_id/:product_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><OrderAction /></Suspense></>} exact />
              <Route path='/superadmin/payment/complete/action/:id/:user_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><PaymentCompleteAction /></Suspense></>} exact />
              <Route path='/superadmin/orders/order/:order_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><ViewOrder /></Suspense></>} exact />
              <Route path='/superadmin/orders/customer/:user_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><ViewUser /></Suspense></>} exact />
              <Route path='/superadmin/signup' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><AdminSignUp /></Suspense></>} exact />
              <Route path='/superadmin/login' element={<><AdminHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><AdminLogin /></Suspense></>} exact />
              <Route path='/superadmin/subadmin/profile/:id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><ViewSubAdminProfile /></Suspense></>} exact />
              <Route path='/superadmin/subadmin/products/:user_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><ViewSubAdminProducts /></Suspense></>} exact />
              <Route path='/superadmin/subadmin/orders/:user_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><ViewSubAdminOrders /></Suspense></>} exact />
              <Route path='/superadmin/addcoupon' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><AddCoupon /></Suspense></>} exact />
              <Route path='/superadmin/addcoupon/:coupon_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><AddCoupon /></Suspense></>} exact />
              <Route path='/superadmin/b2b' element={<> <AdminHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><B2BHome /></Suspense></>} exact />
              <Route path='/superadmin/b2b/addproduct' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><B2BAddNewProductBySuperAdmin /></Suspense></>} exact />
              <Route path='/superadmin/image/:image_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><ViewDocuments /></Suspense></>} exact />
              <Route path='/superadmin/b2b/orders/:id/:user_id/:product_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><B2BSuperAdminOrderBill /></Suspense></>} exact />
              <Route path='/superadmin/b2b/orders/action/:id/:user_id/:product_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><B2BOrderAction /></Suspense></>} exact />
              <Route path='/superadmin/labtest/action/:id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><LabStatusUpdate /></Suspense></>} exact />
              <Route path='/superadmin/b2b/payment/complete/action/:id/:user_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><B2BPaymentCompleteAction /></Suspense></>} exact />

            </Routes>
          </div>
          <div>
            <Routes>
              {/* Partner Routes */}
              <Route path='/partner/login' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><Partner_Login /></Suspense></>} exact />
              <Route path='/partner/signup' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><Partner_SignUp /></Suspense></>} exact />
              <Route path='/partner/complete-profile' element={<><Header /><Suspense fallback={<HashLoader color="#36d7b7" />}><Header2 /><Partner_Complete_Profile /></Suspense></>} exact />
              <Route path='/partner/home' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><Partner_Home /></Suspense></>} exact />
              <Route path='/partner/home/orders' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><UserProfileOrder /></Suspense></>} exact />
              <Route path='/partner/home/lab-booking' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><UserProfileLabBooking /></Suspense></>} exact />
              <Route path='/partner/home/appoiments' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><UserProfileAppoiments /></Suspense></>} exact />
              <Route path='/partner/home/clinic' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><Partner_Home /></Suspense></>} exact />
              <Route path='/partner/home/lab-booking/:id' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><UserProfileParticularLabTest /></Suspense></>} exact />
              <Route path='/partner/home/appoiments/:id' element={<><Header /><Header2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><UserProfileParticularAppoiment /></Suspense></>} exact />


            </Routes>
          </div>
          <div>
            <Routes>
              {/* Partner Routes */}
              <Route path='/b2b/emp/login' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><B2BEmployee_Login /></Suspense></>} exact />
              <Route path='/b2b/emp/home' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><B2BEmployee_Home /></Suspense></>} exact />
              <Route path='/b2b/emp/addnew/service-provider' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><AddNewServiceProvider /></Suspense></>} exact />
              <Route path='/b2b/emp/addnew/customer' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><AddNewCustomer /></Suspense></>} exact />
              <Route path='/b2b/emp/addnew/query/product' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><AddProductWhichIsNotPresent /></Suspense></>} exact />
              <Route path='/b2b/emp/addnew/complete-profile' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><CompelteProfileFrom /></Suspense></>} exact />

            </Routes>
          </div>
          <div>
            <Routes>
              {/*Delivery Partner Routes */}
              <Route path='/delivery-partner/login' element={<><Delivery_Partner_Header /><Suspense fallback={<HashLoader color="#36d7b7" />}><Delivery_Partner_Login /></Suspense></>} exact />
              <Route path='/delivery-partner/signup' element={<><Delivery_Partner_Header /><Suspense fallback={<HashLoader color="#36d7b7" />}><Delivery_Partner_SignUp /></Suspense></>} exact />
              <Route path='/delivery-partner/complete-profile' element={<><Delivery_Partner_Header /><Suspense fallback={<HashLoader color="#36d7b7" />}><Delivery_Partner_Complete_Profile /></Suspense></>} exact />
              <Route path='/delivery-partner/home' element={<><Delivery_Partner_Header /><Suspense fallback={<HashLoader color="#36d7b7" />}><Delivery_Partner_Home /></Suspense></>} exact />
              {/* <Route path='/partner/home/orders' element={<><Header /><Header2 /><UserProfileOrder /></>} exact />
            <Route path='/partner/home/lab-booking' element={<><Header /><Header2 /><UserProfileLabBooking /></>} exact />
            <Route path='/partner/home/appoiments' element={<><Header /><Header2 /><UserProfileAppoiments /></>} exact />
            <Route path='/partner/home/clinic' element={<><Header /><Header2 /><Partner_Home /></>} exact />
            <Route path='/partner/home/lab-booking/:id' element={<><Header /><Header2 /><UserProfileParticularLabTest /></>} exact />
            <Route path='/partner/home/appoiments/:id' element={<><Header /><Header2 /><UserProfileParticularAppoiment /></>} exact /> */}


            </Routes>
          </div>
          <div>


            {/* Sub Admin Routes */}
            <Routes>
              <Route path='/sub-admin/login' element={<><B2BHeader /><div className='dis-flex'> <Suspense fallback={<HashLoader color="#36d7b7" />}> <Sub_Admin_Login /> </Suspense></div></>} exact />
              <Route path='/sub-admin/signup' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><Sub_Admin_SignUp /></Suspense></>} exact />
              <Route path='/sub-admin/complete-profile' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><CompelteProfileFrom /></Suspense></>} exact />
              <Route path='/sub-admin/home' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><Sub_Admin_Home_Page /></Suspense></>} exact />
              <Route path='/sub-admin/home/address' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><Sub_Admin_Home_Page /></Suspense></>} exact />
              <Route path='/sub-admin/home/phone' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><Sub_Admin_Home_Page /></Suspense></>} exact />
              <Route path='/sub-admin/home/updateproduct/:product_id' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><UpdateProductBySubAdmin /></Suspense></>} exact />
              <Route path='/sub-admin/home/add-new-doctor' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><AddNewDoctor /></Suspense></>} exact />
              <Route path='/sub-admin/home/addproduct' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><AddProductBySubAdmin /></Suspense></>} exact />
              <Route path='/sub-admin/home/add-new-laboratory-test' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><AddNewLaboratoryTest /></Suspense></>} exact />
              <Route path='/sub-admin/orders/:id/:user_id/' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><ViewOrderBySubAdminDemo /></Suspense></>} exact />
              <Route path='/sub-admin/payment/:order_id/:user_id' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><ViewOrderBySubAdminDemo /></Suspense></>} exact />
              <Route path='/sub-admin/reschedule/:appoiment_id' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><RescheduleAppoiment /></Suspense></>} exact />
              <Route path='/sub-admin/reschedule/:appoiment_id' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><RescheduleLabTest /></Suspense></>} exact />
              <Route path='/sub-admin/reschedule/see/:appoiment_id' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><SeeRequestReschedule /></Suspense></>} exact />
              <Route path='/sub-admin/reschedule/see/lab/:appoiment_id' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><SeeRequestRescheduleOfLab /></Suspense></>} exact />
              <Route path='/sub-admin/home/timetable/doctor/:doctor_id' element={<><B2BHeader /><Suspense fallback={<HashLoader color="#36d7b7" />}><DoctorTimeTable /></Suspense></>} exact />
              <Route path='/sub-admin/orders/action/:id/:user_id/:product_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><OrderActionBySubAdmin /></Suspense></>} exact />
              <Route path='/sub-admin/payment/complete/action/:id/:user_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><PaymentCompleteActionBySub_Admin /></Suspense></>} exact />
              <Route path='/sub-admin/payment/labbooking/complete/action/:id/:user_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><LabPaymentCompleteActionBySub_Admin /></Suspense></>} exact />
              <Route path='/sub-admin/payment/appoiment/complete/action/:id/:user_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><AppoitmentPaymentCompleteActionBySub_Admin /></Suspense></>} exact />

            </Routes>
          </div>
          <div>

            <Routes>
              {/* B2B Routes */}
              <Route path='/b2b-home' element={<><B2BHeader /><B2BHeader2 /> <Suspense fallback={<HashLoader color="#36d7b7" />}><B2BHomePage /></Suspense></>} exact />
              <Route path='/b2b-home/margin' element={<><B2BHeader /><B2BHeader2 /><Suspense fallback={<HashLoader color="#36d7b7" />}><AllMadicineByMargin /></Suspense></>} exact />
              <Route path='/b2b-home/lotproduct' element={<><B2BHeader /><B2BHeader2 /> <Suspense fallback={<HashLoader color="#36d7b7" />}><AllMadicineByLot /></Suspense></>} exact />
              {/* <Route path='/b2b/products' element={<><B2BHeader/><B2BHeader2 /> <AllProductPage /></>}  exact /> */}
              <Route path='/b2b/addtocart/:product_id' element={<><B2BHeader /><B2BHeader2 /><Suspense fallback={<HashLoader color="#36d7b7" />}> <ParticularProduct /></Suspense></>} exact />
              <Route path='/b2b/cart' element={<><B2BHeader /><B2BHeader2 /> <Suspense fallback={<HashLoader color="#36d7b7" />}><B2BCartPage /></Suspense></>} exact />
              <Route path='/b2b/order' element={<><B2BHeader /><B2BHeader2 /> <Suspense fallback={<HashLoader color="#36d7b7" />}><B2bOrderPage /></Suspense></>} exact />
              <Route path='b2b/order/bill' element={<><B2BHeader /><B2BHeader2 /> <Suspense fallback={<HashLoader color="#36d7b7" />}><B2BOrderbill /></Suspense></>} exact />
              <Route path='/b2b/medicines/:selectLocation' element={<><B2BHeader /><B2BHeader2 /><Suspense fallback={<HashLoader color="#36d7b7" />}>< AllProductPage /></Suspense></>} exact />
              <Route path='/b2b/emp/payment/complete/action/:id/:user_id' element={<><Suspense fallback={<HashLoader color="#36d7b7" />}><B2BPaymentCompleteAction /></Suspense></>} exact />

            </Routes>
          </div>
          <Fotter />
        </Router>
      </div>

    </>
  );
}

export default App;
