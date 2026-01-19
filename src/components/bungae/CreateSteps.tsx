import Header from '@/components/layout/Header';

export const CreateStep1 = ({}) => {
  return (
    <div>
      <Header pagename="언제 만나고 싶나요?" variant="sub" hasBell={false} />
    </div>
  );
};

export const CreateStep2 = ({}) => {
  return (
    <div>
      <Header pagename="언제까지 몇 명을 모을까요?" variant="sub" hasBell={false} />
    </div>
  );
};

export const CreateStep3 = ({}) => {
  return (
    <div>
      <Header pagename="어떤 번개인가요?" variant="sub" hasBell={false} />
    </div>
  );
};
