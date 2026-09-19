import Header from '../../components/Header/Header';
import ContactBanner from '../../components/ContactBanner/ContactBanner';
import Footer from '../../components/Footer/Footer';
import './MainLayout.css';
export default function MainLayout({children,showContact=true}){return <><Header/><main>{children}</main>{showContact&&<ContactBanner/>}<Footer/></>}
