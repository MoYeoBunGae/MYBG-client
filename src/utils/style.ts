export const getStatusColor = (status: string): string => {
  switch (status) {
    case '모집 중':
      return 'text-blue';
    case '추가모집':
      return 'text-green';
    case '모집마감':
      return 'text-primary';
    case '번개종료':
      return 'text-red';
    default:
      return 'text-white';
  }
};
