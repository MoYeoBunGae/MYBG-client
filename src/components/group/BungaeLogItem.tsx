import ProfileDefault from '@/assets/images/profile.png';
import LoadingIcon from '@/assets/icons/loading.svg?react';
import LocationIcon from '@/assets/icons/location-filled.svg?react';
import PersonsIcon from '@/assets/icons/persons-filled.svg?react';
import { getStatusColor } from '@/utils/style';

interface FormattedDate {
  year: number;
  month: number;
  day: number;
  date: string;
  relative: string;
}

interface BungaeLogItemProps {
  creatorName: string;
  creatorProfileImage: string;
  status: string;
  title: string;
  description: string;
  isOnline: boolean;
  attendees: number;
  minAttendees: number;
  maxAttendees: number;
  date: FormattedDate;
}

const BungaeLogItem = ({
  creatorName,
  creatorProfileImage,
  status,
  title,
  description,
  isOnline,
  attendees,
  minAttendees,
  maxAttendees,
  date,
}: BungaeLogItemProps) => {
  return (
    <div className="pt-3 pb-4 text-xs border-b-1 border-lightgray">
      <div className="flex items-center gap-2 pb-2.5">
        <img
          src={creatorProfileImage || ProfileDefault}
          alt="번개 만든 사람"
          className="size-6 rounded-full"
        />
        <div>
          <span className="font-semibold">{creatorName}</span>님의 번개
          <span className="text-black84"> · {date.relative}</span>
        </div>
        <div className={`ml-auto ${getStatusColor(status)}`}>● {status}</div>
      </div>
      <div className="flex h-28 bg-white rounded-md shadow-first overflow-hidden">
        <div className="flex flex-col flex-1 px-3.5 py-3">
          <div className="font-bold text-sm text-black20">{title}</div>
          <div className="grow my-1 text-black60 line-clamp-2 leading-5">{description}</div>
          <div className="flex gap-3 text-black84">
            <div className="flex gap-1">
              <LocationIcon className="size-4 text-darkgray" />
              {isOnline ? '온라인' : '오프라인'}
            </div>
            <div className="flex gap-1">
              <PersonsIcon className="size-4 text-darkgray" />
              {status === '모집 중' ? (
                <div>
                  {minAttendees} ~ {maxAttendees}
                </div>
              ) : (
                <div>
                  {attendees} / {maxAttendees}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="relative aspect-[4/5]">
          <div className="absolute inset-0 flex justify-center items-center z-1 text-white text-center text-shadow-xs text-shadow-black60/15 bg-darkgray">
            {status === '모집 중' ? (
              <div className="flex flex-col items-center gap-1.5">
                <LoadingIcon />
                <div> 날짜 투표 중 </div>
              </div>
            ) : (
              <div>
                <div>{date.month}월</div>
                <div className="font-bold text-2xl">{date.day}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BungaeLogItem;
