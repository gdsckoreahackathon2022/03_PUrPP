# URIBILLA

김윤재, 편장욱, 백지윤, 이홍기  
주제: 기후변화

## 어떤 생각으로 만들었나요?

기후 변화 문제는 언제나 중요한 문제였지만, 동시에 그 심각성을 인지하기 힘든 것이 현실입니다.  
어떻게 하면 사람들이 의도하지 않고도, 자연스럽게 그들이 문제를 한 번 더 생각하게 만들 수 있을까요?  

광고도 보기 귀찮아 유튜브 프리미엄을 구독하는 시대에, 고전적인 설문과 앙케이트는 문제 인식에 도움이 되지 않을 것이라 생각했습니다. 그래서 저희는, '행복한 사고'를 통해 문제를 생각해볼 수 있는 기회를 만들어 보았어요.  

구글 크롬의 '공룡 게임'을 아시나요?  
와이파이가 잘 안되거나, 인터넷 연결에 오류가 생겨 스트레스 받는 상황에  
간단하지만 귀여운 게임을 넣어 상황을 유쾌하게 넘겼던 기억이 있습니다.  

인터넷이 안되면 검색 엔진이 더 이상 할 수 있는 일이 없는데, 공룡 게임은 이런 상황에서 잠시 쉬어갈 타이밍을 줬던 기억이 있네요. 귀여운 공룡이 있는데, 한 번 눌러보지 않고 어떻게 배기겠나요.  

이 점에서 착안해, 공룡 게임 대신 기후 변화에 대해 생각할 수 있는 작은 게임을 넣어보았습니다.  
기후 문제에 대해 알고 있거나, 한번이라도 생각해본 적이 있는 사람들은  
예상하지 못하는 시점에 가벼운 게임을 플레이하면서  잊고 있었던 문제에 대해 다시금 상기시켜주고,  
평소 기후 문제에 관심이 없는 타겟층도 강제성 없이 자신이 생각지 못했던 문제에 대해 고민하는 시간을 가질 수 있어요.

필요한건 웹과 게임.  
Google Cloud Platform의 compute engine으로, 가상머신을 사용하여 서버를 호스팅하였습니다.  

load balancer를 이용하여 https 를 구현하였습니다. https 를 이용해야 service workers 를 이용할 수 있었고, 이를 통해서 no internet connection error page 를 커스텀 할 수 있었습니다. 

게임은 바닐라 js 의 requestAnimationFrame 을 이용해서 만들었습니다. 직접 캐릭터들과 맵을 디자인 하였어요. 이후 충돌 감지, 중력 가속 모방 등을 신경써서 구현을 마무리 하였습니다.



#### [구글 기술]  

Google Cloud Platform - compute engine으로 virtual machine 사용하여 서버를 호스팅
load balancer 사용하여 https 접속 가능하게 구현하였습니다. 서비스 워커를 사용하여  오프라인 환경을 통제하였습니다


## 그래서 만들었습니다

<img src="https://user-images.githubusercontent.com/56385667/152625756-8a6f4ab3-9d0d-436b-8a8c-8b1ab45e6ab4.png" />



귀여운 지구와 함께, 오늘의 웹페이지가 있네요. 무엇을 하는 사이트인지, 들어가볼까요?  



<img src="https://user-images.githubusercontent.com/56385667/152625838-efe4f251-e563-475b-8155-147e164b6210.png"/>


어라, 네트워크 접속이 실패했네요. 와이파이 연결을 확인해야겠네요... 못보던 게임이 있네요?  


호기심은 행동의 가장 큰 원동력입니다.  
전혀 생각지도 못했겠지만, 이번 기회를 통해 기후 변화의 심각성에 대해 생각해보는것은 어떨까요?


## 이런 의미를 줄 수 있을 것 같아요
커다란 문제일수록 직접 해결하려는 노력도 중요하지만,  
문제에 대한 인식을 할 수 있도록 만들어주는 것 그 자체가 더 중요한 것 같아요.  
작은 게임과 기후 문제의 연결고리가 희미해 보일지 모르겠지만,    
너무 거대한 문제로만 느껴지는 기후 변화 문제를 부담 없이 들여다볼 수 있는 하나의 기회를 주는 것,  
이것만으로도 하룻밤의 노력의 가치 정도는 다할 수 있다고 생각합니다. 

## 이런 건 어떨까요?
저희의 목표가 작은 공간을 활용하여 '행복한 사고'를 만드는 것이기에,  
그 방식에는 제약이 없습니다.  
이런 게임 말고도, OSV(Oddly Satisfying Video)라고도 하죠,  
간단한 터치와 인터랙티브 애니메이션을 통해서도 경각심을 줄 수 있고  
설문조사와 캠페인은 호소의 성격이 강하지만  
자연스러운 방식으로 부담 없이 문제에 접근하게 해주는 것이 가능할거예요.