function solution(video_len, pos, op_start, op_end, commands) {
  // 초를 "MM:SS" 형식으로 변환하는 함수
  const toTimeString = (seconds) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0"); // 초를 두 자리로 유지
    return `${minutes}:${secs}`;
  };

  // 문자시간을 초로 변환하는 함수
  const toSeconds = (time) => {
    const [min, sec] = time.split(":").map(Number);
    return min * 60 + sec;
  };

  // 총 길이, 현재 위치, 오프닝 시작/끝을 초로 변환
  const totalLengthSeconds = toSeconds(video_len);
  let currentPosition = toSeconds(pos);
  const opStartSeconds = toSeconds(op_start);
  const opEndSeconds = toSeconds(op_end);

  // 오프닝에 속하는지
  const isOpening = (t) => opStartSeconds <= t && t <= opEndSeconds;

  // 1) "명령 받기 전"에 이미 오프닝 구간이면 건너뛰기
  if (isOpening(currentPosition)) {
    currentPosition = opEndSeconds;
  }

  // 2) commands 처리
  for (let cmd of commands) {
    if (cmd === "prev") {
      currentPosition = Math.max(0, currentPosition - 10);
    } else if (cmd === "next") {
      const newPos = currentPosition + 10;
      currentPosition =
        newPos >= totalLengthSeconds ? totalLengthSeconds : newPos;
    }
    // 명령 수행 후 오프닝 구간이면 건너뛰기
    if (isOpening(currentPosition)) {
      currentPosition = opEndSeconds;
    }
  }

  return toTimeString(currentPosition);
}