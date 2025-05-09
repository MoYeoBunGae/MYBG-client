import { useState } from 'react';
import Button from '@/components/common/Button';
import Toggle from '@/components/common/Toggle';
import BungaeLogItem from '@/components/group/BungaeLogItem';
import { formatTimestamp } from '@/utils/date';

const bungaes = [
  {
    id: 0,
    creatorName: '구교모임장',
    creatorProfileImage: '',
    status: '모집 중',
    title: '오늘 저녁 드실 분',
    description:
      '메뉴는 님이 정하세요 저는 진자 아무것도 상관없고요 저는 진짜 괜찮아요 근데 못 먹는 거 하나 있어요 바로 양꼬치죠 그것만 아니면 됨',
    isOnline: false,
    attendees: 0,
    minAttendees: 1,
    maxAttendees: 6,
    date: '2025-05-06T23:00:00Z',
  },
  {
    id: 1,
    creatorName: '구교모임장',
    creatorProfileImage: '',
    status: '추가모집',
    title: '오늘 저녁 드실 분',
    description: '메뉴는 님이 정하세요',
    isOnline: true,
    attendees: 3,
    minAttendees: 1,
    maxAttendees: 6,
    date: '2025-05-06T00:00:00Z',
  },
  {
    id: 2,
    creatorName: '구교모임장',
    creatorProfileImage: '',
    status: '모집마감',
    title: '오늘 저녁 드실 분',
    description: '메뉴는 님이 정하세요',
    isOnline: false,
    attendees: 6,
    minAttendees: 4,
    maxAttendees: 6,
    date: '2025-05-04T23:00:00Z',
  },
  {
    id: 3,
    creatorName: '구교모임장',
    creatorProfileImage: '',
    status: '번개종료',
    title: '오늘 저녁 드실 분',
    description: '메뉴는 님이 정하세요',
    isOnline: false,
    attendees: 6,
    minAttendees: 4,
    maxAttendees: 6,
    date: '2025-05-04T23:00:00Z',
  },
];

export default function BungaeLogContent() {
  const [onOff, setOnOff] = useState(false);

  return (
    <div className="mx-3 my-4">
      <div className="flex mx-2 mb-1">
        <div className="flex grow gap-2">
          <Button
            text="유형"
            variant="roundThin"
            color="darkOutlined"
            onClick={() => {
              console.log('유형버튼클릭');
            }}
          />
          <Button
            text="상태"
            variant="roundThin"
            color="darkOutlined"
            onClick={() => {
              console.log('상태버튼클릭');
            }}
          />
        </div>
        <div className="flex items-center w-fit gap-1.5">
          <Toggle checked={onOff} size="20" onChange={setOnOff} />
          <div className="text-xs text-black84"> 내가 만든 번개만 </div>
        </div>
      </div>
      <div className="">
        {bungaes.map((bungae) => {
          const formattedDate = formatTimestamp(bungae.date);

          return (
            <BungaeLogItem
              key={bungae.id}
              creatorName={bungae.creatorName}
              creatorProfileImage={bungae.creatorProfileImage}
              status={bungae.status}
              title={bungae.title}
              description={bungae.description}
              isOnline={bungae.isOnline}
              attendees={bungae.attendees}
              minAttendees={bungae.minAttendees}
              maxAttendees={bungae.maxAttendees}
              date={formattedDate}
            />
          );
        })}
      </div>
    </div>
  );
}
