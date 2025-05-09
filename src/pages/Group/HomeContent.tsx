import ThunderEmoji from '@/assets/emojis/thunder.svg?react';
import PersonEmoji from '@/assets/emojis/person.svg?react';
import BubbleEmoji from '@/assets/emojis/bubble.svg?react';
import Box from '@/components/common/Box';
import Button from '@/components/common/Button';

export default function HomeContent() {
  return (
    <div className="mx-3 my-4">
      <div className="grid grid-cols-2 w-full gap-3">
        <Box className="row-span-auto flex items-center justify-center">
          <div className="flex flex-col items-center">
            <img
              className="object-cover size-20 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjg1-pu0KbGUm7-XsnUkVPuGpKbGvqCLT-yfAc9iqFvSDHUhLNDC4aqfOOjIq962K4jQ&usqp=CAU"
              alt="프로필사진"
            />
            <div className="font-semibold text-sm pt-3 pb-1.5">그룹 내 닉네임 </div>
            <div className="text-xs text-darkgray underline cursor-pointer"> 프로필 편집 </div>
          </div>
        </Box>
        <div className="grid gap-3">
          <Button
            text="새로운 번개 생성"
            color="clear"
            variant="withIcon"
            icon={<ThunderEmoji />}
            onClick={() => {
              console.log('번개 생성 버튼 클릭');
            }}
            className="bg-secondary"
          />
          <Button
            text="멤버 목록 확인"
            color="white"
            variant="withIcon"
            icon={<PersonEmoji />}
            onClick={() => {
              console.log('멤버 목록 버튼 클릭');
            }}
            className="bg-secondary"
          />
          <Box className="relative h-24">
            <div className="text-sm font-semibold pb-1">채팅</div>
            <div className="text-xs text-black60">그룹 멤버들과 채팅</div>
            <BubbleEmoji className="size-11 absolute bottom-2.5 right-2.5" />
          </Box>
        </div>
      </div>
    </div>
  );
}
