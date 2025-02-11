import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SubscriptionPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);

  const monthlyPrice = 79000; // 79,000 VND

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Giả lập thanh toán
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('Thanh toán thành công!');
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng thử lại!');
    }
    
    setLoading(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <h2 className="text-2xl font-bold">Đăng ký Gói Xem Phim</h2>
        <p className="text-gray-600">Xem phim không giới hạn</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-lg">Gói tháng</p>
            <p className="text-3xl font-bold">{monthlyPrice.toLocaleString()}đ</p>
            <p className="text-sm text-gray-600">Tự động gia hạn hàng tháng</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Số thẻ</label>
              <Input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Ngày hết hạn</label>
                <Input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">CVV</label>
                <Input
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Đang xử lý...' : 'Thanh toán ngay'}
            </Button>
          </form>
        </div>
      </CardContent>
      <CardFooter className="text-center text-sm text-gray-600">
        Bạn có thể hủy đăng ký bất cứ lúc nào
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPayment;