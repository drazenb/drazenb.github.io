function research_print(usejp){
    if (usejp === undefined) {
        usejp = false;
    }
    document.write('<h2 class="cg">')
    if (!usejp) {
        document.write('Sensing and modeling of people\'s behavior')
    }
    else {
        document.write('人の行動のセンシングやモデル化')
    }    
    document.write('</h2>')
    document.write('<section>')
    document.write('<h3 class="cg">')
    if (!usejp) {
        document.write('People sensing using 3D range sensors')
    }
    else {
        document.write('3次元距離センサを使った人の追跡や行動認識')
    }    
    document.write('</h3>')
    if (!usejp) {
        document.write('\
            <p>We have been working on the tracking and behavior recognition of people in public spaces using 3D range sensors such as depth cameras and 3D LiDARs.</p> \
            <p>See example videos below.</p> \
        ')
    }
    else {
        document.write('\
            <p>距離画像センサや3次元LiDARなどの3D距離センサを使用して、公共スペースの人々の追跡や行動認識に取り組んでいる。</ p> \
            <p>以下は例の動画。</ p> \
        ')
    }    
    document.write('<div class="youtube"> \
              <iframe src="https://www.youtube.com/embed/HYVj3cCJUdI" frameborder="0" allowfullscreen></iframe> \
            </div> ')
    
    if (!usejp) {
        document.write('\
            <p>You can also find freely available datasets <a href="https://dil.atr.jp/ISL/dataset/">here</a> as well as <a href="http://www.robot.soc.i.kyoto-u.ac.jp/en/datasets/">here</a>.</p> \
            <p>For more details refer to the relevant publications.</p> \
         ')
    }
    else {
        document.write(' \
            <p>公開されているデータセット:<a href = "https://dil.atr.jp/ISL/dataset/">ここ</a>と<a href="http://www.robot.soc.i.kyoto-u.ac.jp/en/datasets/">ここ</a>。</p> \
            <p>詳細については、関連する出版物を参照してください。</ p> \
        ')
    }
    document.write(' \
            <div class="research_papers"> \
              <ul> \
                <li>K. Du, T. Kaczmarek, D. Brščić, T. Kanda, <span class="italic">Recognition of Rare Low-Moral Actions Using Depth Data</span>, Sensors, Vol. 20, No. 10, 2758, 2020</li> \
                <li>D. Brščić, R. W. Evans, M. Rehm, T. Kanda, <span class="italic">Using a Rotating 3D LiDAR on a Mobile Robot for Estimation of Person\'s Body Angle and Gender</span>, Sensors, Vol. 20, No. 14, 3964, 2020</li> \
                <li>D. Brščić, T. Kanda, <span class="italic">Changes in Usage of an Indoor Public Space: Analysis of One Year of Person Tracking</span>, IEEE Transactions on Human-Machine Systems, Vol. 45, No. 2, pp. 228-237, 2015</li> \
                <li>D. Brščić, T. Kanda, T. Ikeda, T. Miyashita, <span class="italic">Person tracking in large public spaces using 3D range sensors</span>, IEEE Transactions on Human-Machine Systems, Vol. 43, No. 6, pp. 522-534, 2013</li> \
              </ul> \
            </div> \
    ')
    /*
    if (!usejp) {
        document.write('\
            <p>For multiple 3D range sensors calibration see also:</p> \
         ')
    }
    else {
        document.write('<p>TODO</p>')
    }
    document.write(' \
            <div class="research_papers"> \
              <ul> \
                <li>D.F. Glas, D. Brščić, T. Miyashita, N. Hagita, <span class="italic">SNAPCAT-3D: Calibrating Networks of 3D Range Sensors for Pedestrian Tracking</span>, IEEE International Conference on Robotics and Automation ICRA 2015, pp. 712-719, Seatle, USA, May 2015</li> \
              </ul> \
            </div> \
    ')
    */
    document.write('</section>')

    document.write('<section>')

    document.write('<h3 class="cg"> ')
    if (!usejp) {
        document.write('modelling pedestrian behavior')
    }
    else {
        document.write('歩行者行動のモデル化')
    }    
    document.write('</h3>')
    
    if (!usejp) {
        document.write('\
            <p>The above tracking system allowed us to model the behavior of pedestrians, and in particular predestrian groups. See e.g. the following works:</p> \
        ')
    }
    else {
        document.write('\
            <p>上の人間追跡システムにより、歩行者（特に歩行者グループ）の行動をモデル化した。以下の論文を参照。</ p> \
        ')
    }    
    document.write(' \
            <div class="research_papers"> \
              <ul> \
                <li>F. Zanlungo, Z. Yücel, D. Brščić, T. Kanda, N. Hagita, <span class="italic">Intrinsic group behaviour: Dependence of pedestrian dyad dynamics on principal social and personal features</span>, PLoS One, Vol. 12, No. 11, e0187253, pp. 1-26, 2017</li> \
                <li>D. Brščić, F. Zanlungo, T. Kanda, <span class="italic">Modelling of Pedestrian Groups and Application to Group Recognition</span>, 40th International Convention on Information and Communication Technology, Electronics and Microelectronics (MIPRO), Opatija, Croatia, May 2017</li> \
                <li>F. Zanlungo, D. Brščić, T. Kanda, <span class="italic">Spatial-size scaling of pedestrian groups under growing density conditions</span>, Physical Review E, Vol. 91, No. 6, p. 062810, 2015</li> \
                <li>D. Brščić, F. Zanlungo, T. Kanda, <span class="italic">Density and Velocity Patterns during One Year of Pedestrian Tracking</span>, Conference on Pedestrian and Evacuation Dynamics PED 2014, October 2014 (in Transportation Research Procedia, Vol. 2, pp. 77-86, 2014)</li> \
                <li>F. Zanlungo, D. Brščić, T. Kanda, <span class="italic">Pedestrian Group Behaviour Analysis under Different Density Conditions</span>, Conference on Pedestrian and Evacuation Dynamics PED 2014, October 2014 (in Transportation Research Procedia, Vol. 2, pp. 149-158, 2014)</li> \
              </ul> \
            </div> \
    ')
    
    document.write('</section>')

    document.write('<h2 class="cg">')
    if (!usejp) {
        document.write('model-based human-robot interaction')
    }
    else {
        document.write('モデルに基づいたヒューマンロボットインタラクション')
    }
    document.write('</h2>')
   
    document.write('<section>')
    if (!usejp) {
        document.write(' \
            <p> Based on the sensing and behavior modeling described above we have been working on the creation of smooth and natural interactions of social robots with humans in public spaces. </p> \
        ')
    }
    else {
        document.write(' \
            <p> 上記のセンシングと行動モデリングに基づいて、私たちは公共空間でのソーシャルロボットと人間とのスムーズで自然な相互作用の作成に取り組んでいる。 </p> \
        ')
    }
    document.write('</section>')
    
   
    document.write('<h3 class="cg">')
    if (!usejp) {
        document.write('data-driven learning of human interactions')
    }
    else {
        document.write('データに基づいた人間のインタラクションの学習')
    }
    document.write('</h3>')
    
    document.write('<section>')
    
    if (!usejp) {
        document.write(' \
            <p> The data collected using the sensing system allows us to apply machine learning to learn social robot interactive behavior directly from human-human interactions.</p> \
        ')
    } else {
        document.write(' \
            <p> センシングシステムを使用して収集されたデータにより、機械学習を適用して、人間同士小野インタラクションから直接ソーシャルロボットのインタラクティブな動作を学習できる。</p> \
        ')
    }
    
    document.write(' \
            <div class="research_papers"> \
              <ul> \
                <li>M. Doering, D. Brščić, T. Kanda, <span class="italic">Data-Driven Imitation Learning for a Shopkeeper Robot with Periodically Changing Product Information</span>, ACM Transactions on Human-Robot Interaction 10, 4, Article 31, 20 pages, 2021</li> \
				<li>A. Nanavati, M. Doering, D. Brščić, and T. Kanda, <span class="italic">Autonomously Learning One-To-Many Social Interaction Logic from Human-Human Interaction Data</span>, 2020 ACM/IEEE International Conference on Human-Robot Interaction (HRI), Cambridge, UK, March 2020</li> \
              </ul> \
            </div> \
    ')
    document.write('</section>')

    document.write('<h3 class="cg">')
    if (!usejp) {
        document.write('simulation-based interaction planning')
    }
    else {
        document.write('シミュレーションに基づいたロボットインタラクション計画')
    }
    document.write('</h3>')
    
    document.write('<section>')
    
    document.write('<h4 class="cg">')
    if (!usejp) {
        document.write('escaping children\'s abuse of robots')
    }
    else {
        document.write('ロボットいじめの回避')
    }
    document.write('</h4>')
     
    if (!usejp) {    
        document.write(' \
            <p> We studied the problem of the robot being abused by small children in public spaces, and proposed a method to predict the abuse and escape from it. </p> \
        ')
    }
    else {
        document.write(' \
            <p> 公共の場で小さな子供たちにロボットがいじめされる問題を研究し、いじめを予測することにより回避する方法を提案した。 </p> \
        ')
    }
    document.write(' \
            <div class="youtube"> \
              <iframe src="https://www.youtube.com/embed/CuJT9EtdETY" frameborder="0" allowfullscreen></iframe> \
            </div> \
    ')
    if (!usejp) {    
        document.write(' \
            <p>This work has also been covered in the press - <a href="http://spectrum.ieee.org/automaton/robotics/artificial-intelligence/children-beating-up-robot/?utm_source=roboticsnews&utm_medium=email&utm_campaign=081815#" target="_blank">IEEE Spectrum</a></p> \
        ')
    }
    else {
        document.write(' \
            <p> \
            <!-- This work has also been covered in the press - --> \
            <a href="http://spectrum.ieee.org/automaton/robotics/artificial-intelligence/children-beating-up-robot/?utm_source=roboticsnews&utm_medium=email&utm_campaign=081815#" target="_blank">IEEE Spectrum</a> \
            </p> \
        ')
    }
    document.write(' \
            <div class="research_papers"> \
              <p>D. Brščić, H. Kidokoro, Y. Suehiro, T. Kanda, <span class="italic">Escaping from Children’s Abuse of Social Robots</span>, 10th ACM/IEEE International Conference on Human-Robot Interaction HRI 2015, pp. 59-66, Portland, USA, March 2015</p> \
            </div> \
    ')
    document.write('</section>')
    
    document.write('<section>')

    document.write('<h4 class="cg">')
    if (!usejp) {
        document.write('robot providing information')
    }
    else {
        document.write('情報を提供するロボット')
    }
    document.write('</h4>')
        
    if (!usejp) {
        document.write(' \
            <p>We developed a method to predict the motion of typical visitors and used it to implement a robot which approaches only atypical people in order to offer them help.</p> \
        ')
    }
    else {
        document.write(' \
            <p>ショッピングモールの典型的な訪問者の動きを予測する方法を開発し、それを使用して、非典型的な人々だけにアプローチして支援を提供するロボット実現した。</p> \
        ')
    }
    document.write(' \
             <div class="youtube"> \
              <iframe src="https://www.youtube.com/embed/FLE8utuaavo" frameborder="0" allowfullscreen></iframe> \
            </div> \
            <div class="research_papers"> \
              <p>D. Brščić, T. Ikeda, T. Kanda, <span class="italic">Do You Need Help? A Robot Providing Information to People Who Behave Atypically</span>, IEEE Transactions on Robotics, Vol. 33, No. 3, 2017</p> \
            </div> \
    ')
    document.write('</section>')
    
    document.write('<section>')
    
	document.write('<h4 class="cg">')
    if (!usejp) {
        document.write('preventing congestion around robot')
    }
    else {
        document.write('ロボット周辺の混雑を防ぐ')
    }
    document.write('</h4>')
        
    if (!usejp) {
        document.write(' \
            <p>Since a robot often attracts crowds of people and can become a nuisance to other pedestrians, we developed a way for the robot to estimate the effect of its presence on the confort of people passing nearby and used this model to plan the robots actions.</p> \
        ')
    }
    else {
        document.write(' \
            <p>ロボットは人ごみを惹きつけ、他の歩行者の迷惑になることが多い。ロボットが近くを通過する人々の快適さへの影響を推定する方法を開発し、このモデルを使用してロボットの動作を計画しました。</p> \
        ')
    }
    document.write(' \
            <div class="youtube"> \
              <iframe src="https://www.youtube.com/embed/N014SI-SzKc" frameborder="0" allowfullscreen></iframe> \
            </div> \
    ')
    document.write(' \
            <div class="research_papers"> \
              <ul> \
                <li>H. Kidokoro, T. Kanda, D. Brščić, M. Shiomi, <span class="italic">Simulation-Based Behavior Planning to Prevent Congestion of Pedestrians Around a Robot</span>, IEEE Transactions on Robotics, Vol. 31, No. 6, pp. 1419-1431, 2015</li> \
                <li>H. Kidokoro, T. Kanda, D. Brščić, M. Shiomi, <span class="italic">Will I bother here? - A robot anticipating its influence on pedestrian walking comfort</span>, 8th ACM/IEEE International Conference on Human-Robot Interaction HRI 2013, pp. 259-266, Tokyo, Japan, March 2013</li> \
              </ul> \
            </div> \
    ')
    document.write('</section>')
    document.write('<section>')
    document.write(' <!--\
            See also: \
            <div class="research_papers"> \
              <ul> \
                <li>S. Satake, T. Kaczmarek, D. Brščić and T. Kanda, <span class="italic">Facilitating Software Development for Mobile Social Robots by Simulating Interactions Between a Robot and Pedestrians</span>, 14th ACM/IEEE International Conference on Human-Robot Interaction (HRI), pp. 626-627, Daegu, Korea (South), 2019</li> \
              </ul> \
            </div> \
          </section> \
    -->')
 
}
