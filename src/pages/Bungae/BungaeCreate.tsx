import { CreateStep1, CreateStep2, CreateStep3 } from '@/components/bungae/CreateSteps';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';
import { useBungaeStore } from '@/store/bungaeStore';

export default function BungaeCreate() {
  const { step, nextStep, prevStep, resetForm } = useBungaeStore();

  const steps = [<CreateStep1 />, <CreateStep2 />, <CreateStep3 />];
  const isFirstStep = step === 1;
  const isLastStep = step === steps.length;

  const handleNext = () => {
    if (isLastStep) {
      alert('번개 생성 완료!');
      resetForm();
    } else {
      nextStep();
    }
  };

  return (
    <div className="bg-white h-screen overflow-y-auto overscroll-none">
      <Header
        pagename="새로운 번개"
        variant="sub"
        hasBell={false}
        leftIcon="close"
        isCenter={true}
      />
      <div className="overflow-y-auto h-full">{steps[step - 1]}</div>

      <div className="fixed bottom-0 left-0 right-0 px-3 mb-10 flex gap-2">
        {!isFirstStep && (
          <div className="w-2/5 bg-white rounded-md">
            <Button text="이전" color="darkOutlined" onClick={prevStep} />
          </div>
        )}
        <div className="w-full">
          <Button text={isLastStep ? '번개 생성' : '다음'} onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}
