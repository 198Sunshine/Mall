<template>
  <div class="wrapper">
    <div class="content" ref="aa">
      <ul>
        <li>信息1</li>
        <li>信息2</li>
        <li>信息3</li>
        <li>信息4</li>
        <li>信息5</li>
        <li>信息6</li>
        <li>信息7</li>
        <li>信息8</li>
        <li>信息9</li>
        <li>信息10</li>
        <li>信息11</li>
        <li>信息12</li>
        <li>信息13</li>
        <li>信息14</li>
        <li>信息15</li>
        <li>信息16</li>
        <li>信息17</li>
        <li>信息18</li>
        <li>信息19</li>
        <li>信息20</li>
        <li>信息21</li>
        <li>信息22</li>
        <li>信息23</li>
        <li>信息24</li>
        <li>信息25</li>
        <li>信息26</li>
        <li>信息27</li>
        <li>信息28</li>
        <li>信息29</li>
        <li>信息30</li>
        <li>信息31</li>
        <li>信息32</li>
        <li>信息33</li>
        <li>信息34</li>
        <li>信息35</li>
        <li>信息36</li>
        <li>信息37</li>
        <li>信息38</li>
        <li>信息39</li>
        <li>信息40</li>
        <li>信息41</li>
        <li>信息42</li>
        <li>信息43</li>
        <li>信息44</li>
        <li>信息45</li>
        <li>信息46</li>
        <li>信息47</li>
        <li>信息48</li>
        <li>信息49</li>
        <li>信息50</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import scroll from 'better-scroll'
export default {
  name: '',
  components: {},
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll = new scroll(this.$refs.aa,{
      proberType:3
    })
  },
  methods:{
  }
}
</script>

<style scoped>
  .content{
    height: 300px;
    background: red;
    overflow: hidden;
  }
</style>
