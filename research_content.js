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
        document.write('<p>TODO</p>')
    }    
    document.write('<div class="youtube"> \
              <iframe src="https://www.youtube.com/embed/HYVj3cCJUdI" frameborder="0" allowfullscreen></iframe> \
            </div> ')
    
    if (!usejp) {
        document.write('\
            <p>You can also find freely available datasets here as well as here.</p> \
            <p>For more details refer to the relevant publications.</p> \
         ')
    }
    else {
        document.write('<p>TODO</p>')
    }
    document.write(' \
            <div class="research_papers"> \
              <ul> \
                <li>D. Brščić, R. W. Evans, M. Rehm, T. Kanda, <span class="italic">Using a Rotating 3D LiDAR on a Mobile Robot for Estimation of Person\'s Body Angle and Gender</span>, Sensors, Vol. 20, No. 14, 3964, 2020</li> \
                <li>K. Du, T. Kaczmarek, D. Brščić, T. Kanda, <span class="italic">Recognition of Rare Low-Moral Actions Using Depth Data</span>, Sensors, Vol. 20, No. 10, 2758, 2020</li> \
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
        document.write('<p>TODO</p>')
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

    document.write(' \
           <section> \
            <h3 class="cg">escaping children\'s abuse of robots</h3> \
            <p> We studied the problem of the robot being abused by small children in public spaces, and proposed a method to predict the abuse and escape from it. </p> \
            <div class="youtube"> \
              <iframe src="https://www.youtube.com/embed/CuJT9EtdETY" frameborder="0" allowfullscreen></iframe> \
            </div> \
            <p>This work has also been covered in the press - <a href="http://spectrum.ieee.org/automaton/robotics/artificial-intelligence/children-beating-up-robot/?utm_source=roboticsnews&utm_medium=email&utm_campaign=081815#" target="_blank">IEEE Spectrum</a></p> \
            <div class="research_papers"> \
              <p>D. Brščić, H. Kidokoro, Y. Suehiro, M. Shiomi, <i>Escaping from Children’s Abuse of Social Robots</i>, 10th ACM/IEEE International Conference on Human-Robot Interaction HRI 2015, pp. 59-66, Portland, USA, March 2015</p> \
            </div> \
          </section> \
          <section> \
            <h3 class="cg">robot providing information</h3> \
            <p>We developed a method to predict the motion of typical visitors and used it to implement a robot which approaches only atypical people in order to offer them help.</p> \
            <div class="youtube"> \
              <iframe src="https://www.youtube.com/embed/FLE8utuaavo" frameborder="0" allowfullscreen></iframe> \
            </div> \
            <div class="research_papers"> \
              <p>D. Brščić, T. Ikeda, T. Kanda, "Do You Need Help? A Robot Providing Information to People Who Behave Atypically", IEEE Transactions on Robotics, Vol. 33, No. 3, 2017 (to appear)</p> \
            </div> \
          </section> \
          <section> \
            <h3 class="cg">preventing congestion around robot</h3> \
            <p>Since a robot often attracts crowds of people and can become a nuisance to other pedestrians, we developed a way for the robot to estimate the effect of its pressence on the confort of people passing nearby and used this model to plan the robots actions.</p> \
            <div class="youtube"> \
              <iframe src="https://www.youtube.com/embed/N014SI-SzKc" frameborder="0" allowfullscreen></iframe> \
            </div> \
            <div class="research_papers"> \
              <ul> \
                <li>H. Kidokoro, T. Kanda, D. Brščić, M. Shiomi, <i>Simulation-Based Behavior Planning to Prevent Congestion of Pedestrians Around a Robot</i>, IEEE Transactions on Robotics, Vol. 31, No. 6, pp. 1419-1431, 2015</li> \
                <li>H. Kidokoro, T. Kanda, D. Brščić, M. Shiomi, <i>Will I bother here? - A robot anticipating its influence on pedestrian walking comfort</i>, 8th ACM/IEEE International Conference on Human-Robot Interaction HRI 2013, pp. 259-266, Tokyo, Japan, March 2013</li> \
              </ul> \
            </div> \
          </section> \
    ')
    

}
