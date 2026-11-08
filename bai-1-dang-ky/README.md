# Bài 1 – Form đăng ký thành viên CLB ⭐

## Yêu cầu

### HTML (`index.html`)
Form đã có sẵn **Họ tên** và **Email**. Thêm 2 nhóm ô nhập theo đúng cấu trúc của nhóm có sẵn:
1. **Số điện thoại** – `id="phone"`
2. **Mật khẩu** – `id="password"`, `type="password"`

Mỗi nhóm gồm: `div.form-group` → `label` + `input` + `small.error-msg`.

### CSS (`style.css`)
Hoàn thành 3 class đang để trống:
- `.form-group.error input` → viền đỏ `#e74c3c`
- `.form-group.success input` → viền xanh `#2ecc71`
- `.form-group.error .error-msg` → hiện thông báo lỗi (`visibility: visible`), chữ đỏ

### JS (`script.js`)
Hàm `showError()` và `showSuccess()` đã có sẵn. Viết tiếp:
1. `isEmpty(value)` → `true` nếu chuỗi rỗng (sau khi trim)
2. `isValidEmail(email)` → kiểm tra bằng regex
3. `isValidPhone(phone)` → kiểm tra SĐT Việt Nam (10 số, bắt đầu 03/05/07/08/09 hoặc +84)
4. Trong sự kiện `submit`, kiểm tra:

| Trường | Điều kiện | Thông báo lỗi |
|--------|-----------|---------------|
| Họ tên | Không trống, ≥ 2 ký tự | "Vui lòng nhập họ tên" / "Họ tên phải có ít nhất 2 ký tự" |
| Email | Không trống, đúng định dạng | "Vui lòng nhập email" / "Email không hợp lệ" |
| SĐT | Không trống, đúng định dạng | "Vui lòng nhập số điện thoại" / "Số điện thoại không hợp lệ" |
| Mật khẩu | Không trống, ≥ 6 ký tự | "Vui lòng nhập mật khẩu" / "Mật khẩu phải có ít nhất 6 ký tự" |

5. Nếu tất cả hợp lệ → `alert("Đăng ký thành công!")` và reset form.

## Test case
| Nhập | Kết quả mong đợi |
|------|------------------|
| Để trống hết, bấm Đăng ký | 4 ô đều báo lỗi |
| Email `abc@gmail` | Email không hợp lệ |
| SĐT `0123456789` | Không hợp lệ (đầu 01) |
| SĐT `0912345678` / `+84912345678` | Hợp lệ |
| Mật khẩu `12345` | Ít nhất 6 ký tự |
