export const formatTimestamp = (timestamp: string | Date) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  // 날짜 포맷
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 0-based
  const day = date.getDate();
  const formattedDate = `${year}.${month}.${day}`;

  // 상대 시간 계산
  let relative: string;

  if (diffSec < 60) {
    relative = '방금';
  } else if (diffMin < 60) {
    relative = `${diffMin}분`;
  } else if (diffHour < 24) {
    relative = `${diffHour}시간`;
  } else if (diffDay < 30) {
    relative = `${diffDay}일`;
  } else {
    relative = formattedDate;
  }

  return {
    date: formattedDate,
    relative,
    year,
    month,
    day,
  };
};
