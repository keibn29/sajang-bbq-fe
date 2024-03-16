interface IMenuItem {
  key: number;
  label: string;
  link: string;
  children?: IMenuItem[];
}

export const menuItems: IMenuItem[] = [
  {
    key: 1,
    label: 'Giới Thiệu',
    link: '/introduce',
    children: [
      { key: 11, label: 'Giới thiệu chung', link: '/introduce' },
      { key: 12, label: 'Tiêu chuẩn trong công việc', link: '/introduce' },
      { key: 13, label: 'Cơ cấu tổ chức', link: '/introduce' },
    ],
  },
  {
    key: 2,
    label: 'Dịch Vụ',
    link: '/service',
    children: [
      { key: 21, label: 'Tư vấn Quản lý dự án đầu tư', link: '/service' },
      { key: 22, label: 'Tư vấn xây dựng thể chế và nâng cao năng lực', link: '/service' },
      { key: 23, label: 'Điều tra, nghiên cứu, khảo sát XHH', link: '/service' },
      { key: 24, label: 'Tư vấn Truyền thông ', link: '/service' },
      { key: 25, label: 'Giám sát đánh giá dự án ', link: '/service' },
      { key: 26, label: 'Lập Báo cáo tiền khả thi/Khả thi dự án đầu tư', link: '/service' },
      { key: 27, label: 'Tư vấn thiết kế, triển khai hạ tầng dữ liệu', link: '/service' },
      { key: 28, label: 'Cập nhật, xử lý và phân tích dữ liệu', link: '/service' },
    ],
  },
  {
    key: 3,
    label: 'Sản Phẩm',
    link: '/product',
    children: [
      {
        key: 31,
        label: 'Giải pháp CSDL số',
        link: '/product',
        children: [
          { key: 311, label: 'Thiết kế CSDL số chuyên ngành', link: '/product' },
          { key: 312, label: 'Tạo lập và chuyển đổi CSDL số', link: '/product' },
        ],
      },
      { key: 32, label: 'Giải pháp chuyển đổi số', link: '/product' },
      { key: 33, label: 'Hệ thống thông tin quản lý ', link: '/product' },
    ],
  },
  {
    key: 4,
    label: 'Đối Tác',
    link: '/product',
    children: [
      { key: 41, label: 'Tổ chức/cơ quan Nhà nước', link: '/product' },
      { key: 42, label: 'Doanh nghiệp', link: '/product' },
      { key: 43, label: 'Dự án do WB/ADB tài trợ', link: '/product' },
    ],
  },
  {
    key: 5,
    label: 'Tin Tức',
    link: '/news',
  },
  {
    key: 6,
    label: 'Tuyển Dụng',
    link: '/recruitment',
  },
  {
    key: 7,
    label: 'Liên Hệ',
    link: '/contact',
  },
];

// export const languageOptions: ISelectOption[] = [
//   { value: 'vi', label: 'VI' },
//   { value: 'en', label: 'EN' },
// ];
