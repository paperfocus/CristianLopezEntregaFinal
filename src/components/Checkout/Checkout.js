//Checkout.js
import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
/* import CartItem from '../CartItem/CartItem'; */
import WepPay from '../img/webpay.png';
import SaludoModal from '../SaludoModal/SaludoModal';
import AlertModal from '../AlertModal/AlertModal';
import { useNavigate } from 'react-router-dom';
import '../Checkout/Checkout.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkout = () => {
  const [billingDetails, setBillingDetails] = useState({
    fullName: '',
    rut: '',
    country: '',
    region: '',
    streetAddress: '',
    city: '',
    phone: '',
    email: '',
    orderNotes: '',
  });

  const [shippingMethod, setShippingMethod] = useState('pickup'); 
  const [paymentMethod, setPaymentMethod] = useState('creditCard'); 
  const [saludoModalOpen, setSaludoModalOpen] = useState(false);
  const [alertModalOpen, setAlertModalOpen] = useState(false); 
  const navigate = useNavigate();
  const isFormValid = () => {
    // Excluyo los campos que no deseo en la validación
    const excludedFields = ['orderNotes', 'city'];
  
    // Verificar si todos los campos obligatorios (excepto los excluidos) están llenos
    return Object.entries(billingDetails)
      .filter(([key]) => !excludedFields.includes(key))
      .every(([, value]) => value !== '');
  };

  const { cart, clearCart } = useContext(CartContext);

  // Función para calcular el subtotal de cada producto
  const calculateSubtotal = (item) => item.price * item.quantity;

  // Calcular el subtotal total de todos los productos en el carrito
  const totalSubtotal = cart.reduce((acc, item) => acc + calculateSubtotal(item), 0);

  // Calcular el costo de envío (puedes ajustar esto según tus necesidades)
  const shippingCost = shippingMethod === 'pickup' ? 0 : 5000;

  // Calcular el total
  const total = totalSubtotal + shippingCost;

  // Manejar cambios en el formulario de detalles de facturación
  const handleBillingChange = (e) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar cambios en el método de envío
  const handleShippingChange = (e) => {
    setShippingMethod(e.target.value);
  };

  // Manejar cambios en el método de pago
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Manejar el envío del formulario
  const handlePlaceOrder = () => {
    // Verificar si el formulario es válido antes de proceder
    if (isFormValid()) {
      
      console.log('Formulario enviado:', {
        billingDetails,
        shippingMethod,
        paymentMethod,
      });
      setSaludoModalOpen(true);
    } else {
      setAlertModalOpen(true);
    }
  };
  const handleCloseSaludoModal = () => {
    // Cerrar el modal de saludo
    setSaludoModalOpen(false);
    clearCart();
    navigate('/');
  };
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">
          {/* Columna 1 - Detalles de Facturación */}
          <div className="billing-details">
            <h2>DETALLES DE FACTURACIÓN</h2>
            <form>
              <label>
                Nombre y apellidos <span>*</span>
                <input
                  type="text"
                  name="fullName"
                  value={billingDetails.fullName}
                  onChange={handleBillingChange}
                  required
                />
              </label>
              <label>
                Rut <span>*</span>
                <input
                  type="text"
                  name="rut"
                  value={billingDetails.rut}
                  onChange={handleBillingChange}
                  required
                />
              </label>
              <label>
                País <span>*</span>
                <input
                  type="text"
                  name="country"
                  value={billingDetails.country}
                  onChange={handleBillingChange}
                  required
                />
              </label>
              <label>
                Región/Provincia <span>*</span>
                <input
                  type="text"
                  name="region"
                  value={billingDetails.region}
                  onChange={handleBillingChange}
                  required
                />
              </label>
              <label>
                Dirección de la calle <span>*</span>
                <input
                  type="text"
                  name="streetAddress"
                  value={billingDetails.streetAddress}
                  onChange={handleBillingChange}
                  required
                />
              </label>
              <label>
                Localidad/Ciudad (opcional)
                <input
                  type="text"
                  name="city"
                  value={billingDetails.city}
                  onChange={handleBillingChange}
                />
              </label>
              <label>
                Teléfono <span>*</span>
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]*" 
                  value={billingDetails.phone}
                  onChange={handleBillingChange}
                  required
                />
              </label>
              <label>
                Dirección de correo electrónico <span>*</span>
                <input
                  type="email"
                  name="email"
                  value={billingDetails.email}
                  onChange={handleBillingChange}
                  required
                />
              </label>
              <label>
                Notas del pedido (opcional)
                <textarea
                  name="orderNotes"
                  value={billingDetails.orderNotes}
                  onChange={handleBillingChange}
                />
              </label>
            </form>
          </div>
        </div>

        <div className="col">
          {/* Columna 2 - Resumen del Pedido */}
          <div className="order-summary">
            <h2 className='encab2Checkout'>TU PEDIDO</h2>
            <div className='Separator'></div>
            {cart.map((item) => (
              <div key={item.id} className="product-item">
                <p>Producto: {item.nombre}</p>
                <p>Subtotal: ${calculateSubtotal(item).toLocaleString()}</p> {/* Formatear el subtotal */}
                <p>Cantidad: {item.quantity}</p>
                <div className='Separator'></div>
              </div>
            ))}
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  Envío
                </div>
                <div className="col">
                  <div className="shipping-options">
                    <label>
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="pickup"
                        checked={shippingMethod === 'pickup'}
                        onChange={handleShippingChange}
                      />
                       Retiro en sucursal
                    </label>
                    <div className="espacio-en-blanco"></div>
                    <label>
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="payOnDelivery"
                        checked={shippingMethod === 'payOnDelivery'}
                        onChange={handleShippingChange}
                      />
                       Envío por pagar
                    </label>
                    <div className="espacio-en-blanco"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='Separator'></div>
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  Total
                </div>
                <div className="col">
                  <div className="totals">
                    <p id='TxtBold'>Subtotal: ${totalSubtotal.toLocaleString()}</p> {/* Formatear el subtotal total */}
                    <p id='TxtBold'>Envío: ${shippingCost.toLocaleString()}</p> {/* Formatear el costo de envío */}
                    <p id='TxtBold'>Total(+19%): ${total.toLocaleString()}</p> {/* Formatear el total */}
                  </div>
                </div>
              </div>
            </div>
            <div className='Separator'></div>
            {/* Radios de pago */}
            <div className="payment-options text-left">
              <div className="col-sm-9 mb-3">
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentMethod === 'creditCard'}
                    onChange={handlePaymentChange}
                  />
                  <img id='LogoWebPay' src={WepPay} alt="LogoWebPay" />
                  
                </label>
                
              </div>
              
              <div className="col-sm-9 p-3">
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bankTransfer"
                    checked={paymentMethod === 'bankTransfer'}
                    onChange={handlePaymentChange}
                  />
                  Transferencia Directa
                </label>
            </div>

            <div className='Separator'></div>
          </div>
              <p>Tus datos personales se utilizarán para procesar tu pedido, 
                mejorar tu experiencia en esta web y otros propósitos descritos en nuestra política de privacidad.
                </p>
                <br/><br/><br/>
            <button onClick={handlePlaceOrder} className='btnRealizarPedido'>
              REALIZAR PEDIDO
            </button>
            <SaludoModal show={saludoModalOpen} handleClose={handleCloseSaludoModal} />
            <AlertModal show={alertModalOpen} handleClose={() => setAlertModalOpen(false)} />


          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
