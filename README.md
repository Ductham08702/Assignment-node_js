# Assignment-node_js

Các lưu ý khi tạo biến cũng như lưu tên file và đẩy lên github

# Quy tắc khi tạo biến
* Tên biến viết bằng tiếng anh theo quy tắc như sau: 

vd: Về sản phẩm
- Products (nhiều sản phẩm)
- Product (một sản phẩm)
- New_Product/ newProduct (sản phẩm mới)

# Quy tắc đặt tên file
* Tên biến viết bằng tiếng anh theo quy tắc như sau: 

vd: Về sản phẩm
- Products (nhiều sản phẩm)
- Product (một sản phẩm)
- New_Product/ newProduct (sản phẩm mới)

về các page thì phải có _page ở cuối
vd:
Trang chủ:
- Home_Page
Trang chi tiết sản phẩm:
- Detail_product_Page

* Phân chia rõ ràng các folder như admin, user

vd: trong page sẽ có hai folder nhỏ là Admin và User
- trong hai folder nhỏ này chứa các file về code

#Các bước để đẩy code lên github
*Đối với các thành viên:
- b1: Clone git từ github về máy bằng câu lệnh: git clone "đường dẫn github muốn clone" (chỉ dùng cho lần dầu muốn lấy code vè máy)._
- b2:Kiểm tra nhánh đang code: git branch
- b3: Nếu đang ở nhánh chính (nhánh main) thì tạo nhánh mới phù hợp với issues được giao: git checkout -b "tên nhánh mới"
- Nếu không ở nhánh chính (nhánh main) thì dùng: git checkout main - sau đó thực hiện lại bước 3
- b4: Code chức năng mới trong Visuacode
- b5: git add .
- b6: git commit -m "tên comment theo issues"
- b7: git push origin “tên nhánh của chức năng hiện tại đang code”
- b8: Lên server tạo mới pull requests

*Đối với người review code
- Nếu code hoàn thiện không có lỗi thì tạo merge requests
- Nếu code lỗi thì comment lại lỗi và các thành viên sẽ thực hiện lại từ bước 5 đến bước 7
